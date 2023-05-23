import Background from '../assets/images/CitadelleGin.jpg'

function About() {
  return (
    <div
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      style={{ backgroundImage: `url(${ Background })`}}
      >
        <div className='flex place-items-center h-screen'>
        </div> 
          <h3 className='place-items-center flex p-9 bg-blue-300 bg-opacity-30 text-white rounded '>Enjoy a new way to manage your gins!</h3>
        <div> 
          
        </div>
    </div>
  )
}

export default About