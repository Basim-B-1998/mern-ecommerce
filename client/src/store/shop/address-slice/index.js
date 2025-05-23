import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading : false,
    addressList : []
}

export const addNewAddress = createAsyncThunk('/addresses/addNewAddress',async(formData)=>{
  const responce = await axios.post(`${import.meta.env.VITE_API_URL}/api/shop/address/add`,formData)

  return responce.data
})


export const fetchAllAddress = createAsyncThunk('/addresses/fetchAllAddress',async(userId)=>{
  const responce = await axios.get(`${import.meta.env.VITE_API_URL}/api/shop/address/get/${userId}`)

  return responce.data
})


export const editaAddress = createAsyncThunk('/addresses/editaAddress',async({userId , addressId ,formData})=>{
  const responce = await axios.put(`${import.meta.env.VITE_API_URL}/api/shop/address/update/${userId}/${addressId}`,formData)

  return responce.data
})


export const deleteAddress = createAsyncThunk('/addresses/deleteAddress',async({userId,addressId})=>{
  const responce = await axios.delete(`${import.meta.env.VITE_API_URL}/api/shop/address/delete/${userId}/${addressId}`)

  return responce.data
})


const addressSlice = createSlice({
  name : 'address',
  initialState,
  reducers : {},
  extraReducers : (builder) =>{
      builder.addCase(addNewAddress.pending, (state)=>{
        state.isLoading = true
      }).addCase(addNewAddress.fulfilled, (state,action)=>{
        state.isLoading = false
      }).addCase(addNewAddress.rejected, (state)=>{
        state.isLoading = false
      }).addCase(fetchAllAddress.pending, (state)=>{
        state.isLoading = true
      }).addCase(fetchAllAddress.fulfilled, (state,action)=>{
        state.isLoading = false
        state.addressList=action.payload.data
      }).addCase(fetchAllAddress.rejected, (state)=>{
        state.isLoading = false
        state.addressList = []
      })
  },
})

export default addressSlice.reducer