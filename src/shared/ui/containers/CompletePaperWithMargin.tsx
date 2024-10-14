export default function CompletePaperWithMargin (props:any) {
  return (
    <div className='w-11/12 overlay-gradient h-4/5 rounded-md'>
        {props.children}
    </div>
  )
}
