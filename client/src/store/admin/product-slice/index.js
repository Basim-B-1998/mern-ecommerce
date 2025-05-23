import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { FireExtinguisherIcon } from 'lucide-react'
import axios from "axios";  


const initialState={
  isLoading:false,
  productList:[]
}

export const addNewProduct = createAsyncThunk(
  '/products/addnewproduct',
  async (FormData)=>{
   const result=await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/products/add`,FormData,{
    headers:{
      'content-Type':'application/json'
    }
   })
   return result?.data
})

export const fetchAllProducts = createAsyncThunk(
  '/products/fetchAllProducts',
  async ()=>{
   const result=await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/products/get`,
    )
   return result?.data
})

export const editProduct = createAsyncThunk(
  '/products/editProduct',
  async ({id,FormData})=>{
   const result=await axios.put(`${import.meta.env.VITE_API_URL}/api/admin/products/edit/${id}`,
    FormData,{
    headers:{
      'content-Type':'application/json'
    }
   })
   return result?.data
})

export const deleteProduct = createAsyncThunk(
  '/products/addnewproduct',
  async (id)=>{
   const result=await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/products/delete/${id}`,
   )
   return result?.data
})

const AdminProductsSlice=createSlice({
  name:'adminProducts',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchAllProducts.pending,(state)=>{
      state.isLoading=true
    }).addCase(fetchAllProducts.fulfilled,(state,action)=>{
      console.log(action.payload)
      state.isLoading=false
      state.productList=action.payload.data
    }).addCase(fetchAllProducts.rejected,(state,action)=>{
      
      state.isLoading=false
      state.productList=[]
    })
  }
})


export default AdminProductsSlice.reducer