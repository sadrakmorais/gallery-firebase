import React,{useState,useEffect,FormEvent} from 'react';
import * as S from './app.styles'
import {GlobalStyle} from './globalStyles'
import * as Photos from './services/photos'
import {Photo} from './types/photo'
import PhotoItem from './components/photoItem'


function App() {

  const [loading,setLoading] = useState(false)
  const [photosList,setPhotosList] = useState<Photo[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const getPhotos = async() =>{
    setLoading(true)
    setPhotosList(await Photos.getAll())
    setLoading(false)
    }
    getPhotos()
  },[])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

     e.preventDefault();
     const formData = new FormData(e.currentTarget)
     const file = formData.get('image') as File
     if(file && file.size > 0){
      setUploading(true)
      let result = await Photos.insert(file)
      setUploading(false)

      if(result instanceof Error){
       
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photosList]
        newPhotoList.push(result)
        setPhotosList(newPhotoList)
      }

     }
  }

  return (
    <>
    <GlobalStyle/>
   <S.Wrapper>
    <S.Area>
      <S.Header>Galeria de Fotos</S.Header>
      <S.uploadForm method="post" onSubmit={handleSubmit}>
          <label htmlFor="file">SELECIONAR FOTO</label>
          <input type="file" name='image' id='file' placeholder="dd"/>
          <div className='upload'>
          <input type="submit" value='Enviar' className='submitForm'/>
          {uploading && "Enviando arquivo..."}
          </div>
      </S.uploadForm>
      {loading && 
      <S.LoadingScreen>
        <div className='loading'>🙂</div>
        <span>Estamos preparando tudo, um momento...</span>
      </S.LoadingScreen>
      }
      {!loading &&
      photosList.length > 0 &&
      <S.Gallery>
        {photosList.map((photo,index)=>(
          <PhotoItem key={index} url={photo.url} name={photo.name} />
        ))}
      </S.Gallery>
      }
      {!loading && photosList.length === 0 &&
      <S.LoadingScreen>
      <div className='loading'>🙁</div>
      <span>Voce ainda não adicionou nenhuma foto!</span>
    </S.LoadingScreen>
      }
    </S.Area>
   </S.Wrapper>
   </>
  );
}

export default App;
