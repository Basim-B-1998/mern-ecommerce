import { filteroptions } from "@/config"
import { Label } from "@/components/ui/label"
import { Fragment } from "react"
import { Checkbox } from "../ui/checkbox"
import { Separator } from "../ui/separator"


function ProductFilter({filters,handlefilter}){
  return(
      <div className="bg-background rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-extrabold">Filters</h2>
        </div>
        <div className="p-4 space-y-4">

          {
            Object.keys(filteroptions).map(keyItem=><Fragment>
              <div>
                <h3 className="text-base font-bold">{keyItem}</h3>
                <div className="grid gap-2 mt-2">
                {
                    filteroptions[keyItem].map(option=>
                    <Label className="flex font-medium items-center gap-2">
                      <Checkbox 
                          checked={
                            filters && Object.keys(filters).length > 0 &&
                            filters[keyItem]  &&  filters[keyItem].indexOf(option.id) > -1
                          }                  
                        onCheckedChange={()=>handlefilter(keyItem,option.id)} />
                      {option.label}
                    </Label>)
                }
                </div>
              </div>
              <Separator/> 
            </Fragment>)
          }

        </div>
      </div>
  )
}

export default ProductFilter