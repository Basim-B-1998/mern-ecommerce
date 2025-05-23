import ProductImageUpload from "@/components/admin-view/image-upload";
import AdminProductTile from "@/components/admin-view/product-tile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button"
import { Sheet,SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { addProductFormElements } from "@/config";
import { fetchAllProducts } from "@/store/admin/product-slice";
import { addNewProduct, deleteProduct, editProduct,  } from "@/store/admin/product-slice";
import { Description } from "@radix-ui/react-dialog";
import { Fragment, useEffect } from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const initialFormData={
  image :null,
  title :'',
  description :'',
  category :'',
  brand :'',
  price :'',
  salePrice :'',
  totalStock :''
}


function AdminProducts (){

const [openCreateProductsDialog,setOpenCreateProductsDialog]=useState(false)
const [formData,setFormData]=useState(initialFormData)
const [imageFile,setImageFile]=useState(null)
const [uploadedImageUrl,setUploadedImageUrl]=useState("")
const [imageLoadingState,setImageLoadingState]=useState(false)
const [currentEditedId,setCurrentEditedId] = useState(null)

const {productList}=useSelector(state=>state.adminProducts)
const dispatch=useDispatch()


function onSubmit(event){
  event.preventDefault()

  currentEditedId !== null ?
  dispatch(editProduct({
    id : currentEditedId,...formData
  })).then((data)=>{
      console.log(data, "edit");
    if (data?.payload?.success){
      dispatch(fetchAllProducts())
      setFormData(initialFormData)
      setOpenCreateProductsDialog(false)
      setCurrentEditedId(null)
    }

  }) 
  : dispatch(addNewProduct({
    ...formData,
    image:uploadedImageUrl
  })).then((data)=>{
    console.log(data);
    if(data?.payload?.success){
      dispatch(fetchAllProducts())
      setOpenCreateProductsDialog(false)
      setImageFile(null)
      setFormData(initialFormData)
      toast.success("Product added successfully!");

    }
  })
}

function handleDelete(getCurrentProductId){
  dispatch(deleteProduct(getCurrentProductId)).then(data=>{
    if(data?.payload?.success){
      dispatch(fetchAllProducts())
    }
  })
  
}

function isFormValid(){
  return Object.keys(formData)
  .map(key=>formData[key] !=='')
  .every(item=>item)
}

useEffect(()=>{
  dispatch(fetchAllProducts())
},[dispatch])

console.log(productList,"ProductList")  ;


  return (
    <Fragment>
      <div className="mb-5 flex justify-end w-full pr-4">
       <button onClick={()=>setOpenCreateProductsDialog(true)}>Add New Product</button>
  </div>
  <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
{
  productList && productList.length >0?
  productList.map(productItem=>(
    <AdminProductTile 
    setFormData={setFormData} 
    setOpenCreateProductsDialog={setOpenCreateProductsDialog} 
    setCurrentEditedId={setCurrentEditedId}
     product={productItem}
     handleDelete={handleDelete}
     />)): null
}

  </div>
  <Sheet open={openCreateProductsDialog} onOpenChange={()=>{
    setOpenCreateProductsDialog(false);
    setCurrentEditedId(null)
    setFormData(initialFormData)
    }}>
    <SheetContent
     side="right"
      className="overflow-auto">
       <SheetHeader>
        <SheetTitle>
          {
            currentEditedId !== null ?
            'Edit product' : 'Add New Product'
          }
      </SheetTitle>
      </SheetHeader>
       <ProductImageUpload 
         imageFile={imageFile}
         setImageFile={setImageFile}
         uploadedImageUrl={uploadedImageUrl} 
         setUploadedImageUrl={setUploadedImageUrl}
         setImageLoadingState={setImageLoadingState}
         imageLoadingState={imageLoadingState}
         isEditMode={currentEditedId !== null}
         />
      <div className="py-6 ml-5">
        <CommonForm 
          onSubmit={onSubmit}
          formData={formData} 
          setFormData={setFormData} 
          buttonText={currentEditedId !==null ? 'Edit' : 'Add'}
          formControls={addProductFormElements}
          isBtnDisabled={!isFormValid()}
        />
      </div>
    </SheetContent>
  </Sheet>

    </Fragment>
  )
}

export default AdminProducts