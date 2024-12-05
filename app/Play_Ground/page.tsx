'use client'
import React, { useState } from 'react';
import Style from './Play_Ground.module.css';
import { Button } from '@/components/ui/button';
const App: React.FC = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    const handleSubmit = (event: any) => {
        const pElement = document.getElementById('p1');
        if (pElement) {
            pElement.textContent = `Hello, ${name}!`;
        }
    };
    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
          // Jika Enter ditekan, panggil handleSubmit
          handleSubmit(event);
        }
      };
    const handleCountChange = (operation: string) => {
        if (operation === 'add') {
            setCount(count + 1);
        } else if (operation === 'subtract') {
            setCount(count - 1);
        } else if (operation === 'reset') {
            setCount(0);
        }
    };

    return (
        <div className={Style.centered}>
            <div className="size1">Hello Boss !!!</div>
            <br />
            <div className={Style.centered}>
                Silahkan Masukan Nama<br />
                <label>Nama: </label><br />
                <input 
                    id="box1" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="{Style.centered }  text-black" 
                    onKeyUp= {handleKeyDown}
                    
                />
                <br /><br></br>
                <Button className='bg-slate-700' variant='outline' id="but1" onClick={handleSubmit} >Submit</Button>
                <p id="p1"></p>
            </div>

            <div className={Style.centered}>
                Tombol Hitung
                <label id="hitungan" className={Style.hitungan}>{count}</label>
                <div id="tombolcontainer">
                    <Button variant={'outline'}
                        id="kurang" 
                        className="button" 
                        onClick={() => handleCountChange('subtract')}
                    >
                        Kurang
                    </Button>
                    <Button 
                        id="reset" 
                        className="button" 
                        onClick={() => handleCountChange('reset')}
                        variant={'outline'}
                    >
                        Reset
                    </Button>
                    <Button 
                        id="tambah" 
                        className="button" 
                        onClick={() => handleCountChange('add')}
                        variant={'outline'}
                    >
                        Tambah
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;
