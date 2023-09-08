"use client"

import { Button } from '@/components/ui/button'; // Assuming this is the correct path

import { Menu } from 'lucide-react';
import { 
    Sheet,
     SheetContent, 
     SheetTrigger
     } from '@/components/ui/sheet';
import Sidebar from '@/components/sidebar';
import { useState, useEffect } from 'react';



const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div >
        <Sheet>
            <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden"> 
        <Menu />
      </Button>
            </SheetTrigger>

            <SheetContent side="left" className='p-0'>
                <Sidebar />
            </SheetContent>
      
        </Sheet>
    </div>
  );
};

export default MobileSidebar;
