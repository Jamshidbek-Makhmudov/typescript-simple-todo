
import { useState } from 'react'
import { IData } from './interfaces'
export default function App(): JSX.Element {
  const data: IData[] = [
    { title: 'jamshid', id: 1, description: 'developer' },
    { title: 'james', id: 2, description: 'developer' },
    { title: 'shoxrux', id: 4, description: 'developer' },
  ]
  const [title, setTitle] = useState<string>()
  const [arr, setArr] = useState<IData[]>(data)

  const changeHandler = (evt: React.FormEvent<HTMLInputElement>): void => {
    setTitle(evt.currentTarget.value)
  }
  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: 'developer',
    }
    setArr([...arr, newData])
    setTitle('')
    console.log(title)

  }
  const onDelete = (id: number): void => {
    const newData = arr.filter(c => c.id !== id)
    setArr(newData)


  }
  return (
    <div className='flex w-full items-center justify-center h-[100vh]'>
      <div className='flex w-[80%] md:w-[50%] border-2 rounded-2xl bg-[whitesmoke] h-auto p-4 items-center justify-center gap-4 flex-col'>
        <h1 className='font-bold text-2xl'>To do list</h1>
        <input value={title} onChange={changeHandler} type="text" placeholder='Enter todo...' className='w-full rounded-xl h-10 pl-4' />
        <div className='w-full items-center justify-end flex'>
          <button onClick={handleSubmit} className='btn btn-outline-success '>Add todo</button>

        </div>
        <div className='flex w-full gap-2  flex-col'>

          {arr.map(item => (
            <div className='w-full border-2 rounded-xl h-12 pl-4 flex items-center justify-between px-2 '>
              <p>{item.title}</p>
              <button onClick={() => onDelete(item.id)} className='btn btn-outline-danger'>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
