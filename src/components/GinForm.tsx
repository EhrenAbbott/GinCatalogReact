import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseGinName, chooseCountryOfOrigin, choosePairsWith, chooseTastingNotes } from "../redux/slices/RootSlice";



interface GinFormProps {
  id?: string[]
}

const GinForm = (props:GinFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseGinName(data.gin_name));
      dispatch(chooseCountryOfOrigin(data.country_of_origin));
      dispatch(chooseTastingNotes(data.tasting_notes));
      dispatch(choosePairsWith(data.pairs_with));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="gin_name">Gin Name</label>
          <Input {...register('gin_name')} name='gin_name' placeholder="Gin Name"/>
        </div>
        <div>
          <label htmlFor="country_of_origin">Country of Origin</label>
          <Input {...register('country_of_origin')} name='country_of_origin' placeholder="Country of Origin"/>
        </div>
        <div>
          <label htmlFor="tasting_notes">Tasting Notes</label>
          <Input {...register('tasting_notes')} name='tasting_notes' placeholder="Tasting Notes"/>
        </div>
        <div>
          <label htmlFor="pairs_with">Pairs With</label>
          <Input {...register('pairs_with')} name='pairs_with' placeholder="Pairs With"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default GinForm
