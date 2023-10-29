
import Form from './Form'

export default function SectionForm() {
    return (
        <div className='flex gap-28 pb-14' id='form'>
            <div className='pt-16'>
            <div className='relative w-[631px] h-[602.5px] flex justify-center '>
                <img src="/assets/suasanaCafe.jpg" alt="" className='object-cover w-[631px] rounded-br-full ' />
                <div className='w-[631px] h-[602.5px] rounded-br-full bg-[#D9D9D9]  '>
                    <div className='absolute -bottom-1 w-[438px] h-[316px] border-primary-50 border-[5px]  -right-4  border-solid rounded-br-full '>
                    </div>
                </div>
            </div>
            </div>
            <Form></Form>
        </div>
    )
}
