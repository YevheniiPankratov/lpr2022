import React, { useState } from 'react';

import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { updateUserAvatar, putImgToS3Bucket } from '../../API/userAPI';
import {
  localStorageSetItem,
  localStorageGetItem,
  IimageFile
} from '../../Helpers';

export const ProfileAvatar: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(localStorageGetItem('userAvatar'));
  const [isLoadingUploadBtn, setLoadingUploadBtn] = React.useState(false);

  const uploadImageHandler = async () => {
    if (imageFile) {
      setLoadingUploadBtn(true);
      const { url }: { url: string } = await updateUserAvatar(
        imageFile as unknown as IimageFile
      );

      await putImgToS3Bucket({ url, imageFile });
      const finishedImageUrl = url.split('?')[0];
      localStorageSetItem('userAvatar', finishedImageUrl);
      setImageUrl(finishedImageUrl);
      setTimeout(() => setLoadingUploadBtn(false), 1000);
    }
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      setImageFile(event.target.files[0]);
    }
  };

  return (
    <div className="user-block-avatar">
      <div className="form-div-image">
        <Button
          variant="contained"
          component="label"
          startIcon={<PhotoCamera />}
        >
          Upload img
          <input
            hidden
            accept="image/*"
            type="file"
            id="imageUploadInput"
            onChange={inputHandler}
          />
        </Button>
        <LoadingButton
          color="secondary"
          onClick={uploadImageHandler}
          loading={isLoadingUploadBtn}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save IMG
        </LoadingButton>
      </div>
      {imageUrl ? (
        <div className="user-image">
          <img src={imageUrl} alt="user avatar" />
        </div>
      ) : (
        <p className="help-text-avatar">
          You can choose your profile avatar from your photos
        </p>
      )}
    </div>
  );
};
