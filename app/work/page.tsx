import { SliderDemo } from '@/components/sliderdemo'
import { SwitchDemo } from '@/components/SwitchDemo'
import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const work = () => {
  return (
    <><div className='container'>Slider Demo</div><SliderDemo />
    <div className='container'> Switch Demo</div><SwitchDemo/>
    <div className='container'> Button Demo<Button variant='outline'>Pencet</Button></div>
    <div className="container"><Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
</div>
    
    </>
    
  )
}

export default work