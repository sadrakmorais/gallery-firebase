import React from 'react'
import * as S from './styles'
import * as Photos from '../../services/photos'


type Props = {
  url: string,
  name: string,
}

const PhotoItem = ({url, name}: Props) => {


  const handleDelete = async () => {
    
    await Photos.deletePhoto(name)
    document.location.reload()
  }

  return (
    <S.Wrapper>
      <img src={url} alt={name} />
      {name}

      <S.Settings>
        <button onClick={handleDelete}>Excluir Arquivo</button>
      </S.Settings>
    </S.Wrapper>
  )
}

export default PhotoItem
