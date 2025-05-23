import { icons } from "lucide-react"

export const registerFormControls=[
  {
    name:"userName",
    label:"User Name",
    placeholder:"enter your username",
    componentType:"input",
    type:"text",
  },
  {
    name:"email",
    label:"Email",
    placeholder:"enter your email",
    componentType:"input",
    type:"email",
  },
  {
    name:"password",
    label:"password",
    placeholder:"enter your password",
    componentType:"input",
    type:"password",
  },
]


export const loginFormControls=[

  {
    name:"email",
    label:"Email",
    placeholder:"enter your email",
    componentType:"input",
    type:"email",
  },
  {
    name:"password",
    label:"password",
    placeholder:"enter your password",
    componentType:"input",
    type:"password",
  },
]


export const addProductFormElements=[
  {
    label:"Title",
    name:"title",
    componentType:"input",
    type:"text",
    placeholder:"Enter product title"
  },
  {
    label:"Description",
    name:"description",
    componentType:"textarea",
    placeholder:"Enter product description"
  },
  {
    label:"Category",
    name:"category",
    componentType:"select",
    options:[
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label:"Brand",
    name:"brand",
    componentType:"select",
    options:[
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levis", label: "Levis" },
      { id: "zara", label: "Zara" },
      { id: "hm", label: "H&M" },
    ],
  },
  {
    label:"Price",
    name:"price",
    componentType:"input",
    type:"number",
    placeholder:"Enter product price"
  },
  {
    label:"Sale Price",
    name:"sale price",
    componentType:"input",
    type:"number",
    placeholder:"Enter sale price"
  },
  {
    label:"Total Stock",
    name:"total stock",
    componentType:"input",
    type:"number",
    placeholder:"Enter total stock"
  },

];


export const shoppingViewHeaderMenuItems =[
  {
    id : 'home',
    label: 'Home',
    path : '/shop/home'
  },
  {
    id : 'products',
    label: 'Products',
    path : '/shop/listing'
  },
  {
    id : 'men', 
    label: 'Men',
    path : '/shop/listing'
  },
  {
    id : 'women',
    label: 'Women',
    path : '/shop/listing'
  },
  {
    id : 'kids',
    label: 'Kids',
    path : '/shop/listing'
  },
  {
    id : 'footwear',
    label: 'Footwear',
    path : '/shop/listing'     
  },
  {
    id : 'accessories',
    label: 'Accessories',
    path : '/shop/listing'
  },
  {
    id : 'search',
    label: 'Search',
    path : '/shop/search',
  }
]

export const categoryOptionsMap={
  'men' : 'Men',
  'women' : 'women',
  'kids' : 'Kids',
  'accessories' : 'Accessories',
  'footwear' : 'Footwear'
}  

export const brandOptionsMap={
  "nike":"Nike",
  "adidas":"Adidas",
  "puma":"Puma",
  "levi":"Levis",
  "zara":"Zara",
  "h&m":"H&M",
}

export const filteroptions={
  category : [
    {id:"men",label:"Men"},
    {id:"women",label:"Women"},
    {id:"kids",label:"Kids"},
    {id:"accessories",label:"Accessories"},
    {id:"footwear",label:"Footwear"},
  ],
  brand : [
    {id:"nike",label:"Nike"},
    {id:"adidas",label:"Adidas"},
    {id:"puma",label:"Puma"},
    {id:"levi",label:"Levis"},
    {id:"zara",label:"Zara"},
    {id:"h&m",label:"H&M"},
  ],
}

export const sortOptions = [
  { id: "Price: Low to High", label: "Price : Low to High" },
  { id: "Price: High to Low", label: "Price : High to Low" },
  { id: "Title: A to Z", label: "Title: A to Z" },
  { id: "Title: Z to A", label: "Title: Z to A" },
];


export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address"
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city"
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode"
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "tel",
    placeholder: "Enter your phone number"
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    type: "text",
    placeholder: "Additional notes (optional)"
  }
];




