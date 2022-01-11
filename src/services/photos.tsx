import {Photo} from '../types/photo'
import {storage} from './firebase'
import {ref, listAll, getDownloadURL, uploadBytes, deleteObject} from  'firebase/storage'
import {v4 as createHash} from 'uuid'


export const getAll = async () => {

 let list : Photo[]=[];

 /*Cria referencia de uma pasta especifica */
 const imagesFolder = ref(storage,'images')
 /* lista tudo de uma dada referencia (imagesFolder) */
 const photoList = await listAll(imagesFolder)

 for(let i in photoList.items){

/* Gera um url de download do arquivo*/  
  let photoURL = await getDownloadURL(photoList.items[i])

  list.push({
      name: photoList.items[i].name,
      url:photoURL,
   })
 }

 return list

}


export const insert = async (file : File) =>{
  if(['image/jpeg','image/jpg','image/png','image/svg'].includes(file.type)){
    
    let randomHash = createHash()
    let newFile = ref(storage,`images/${randomHash}`)
    let upload = await uploadBytes(newFile, file)
    let photoUrl = await getDownloadURL(upload.ref)

    return{
      name:upload.ref.name,
      url:photoUrl,
    } as Photo

  } else{
    return new Error(`Arquivos no formato ${file.type} não são permitidos.`)
  }
}

export const deletePhoto = async (nameFile : string) =>{

  const deletePhoto = ref(storage,`images/${nameFile}`)
  deleteObject(deletePhoto).then(() => {
    // File deleted successfully
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });

}
export const downloadPhoto = async (nameFile : string) =>{

  const downloadPhoto = ref(storage,`images/${nameFile}`)
  getDownloadURL(downloadPhoto)
  .then((url) => {
    // Insert url into an <img> tag to "download"
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });

}