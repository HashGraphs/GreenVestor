const Business = ({ image, title }) => {
    return ( 
        <article className="border-[#C2C2C2] border p-5 flex flex-col justify-around rounded-lg items-center h-[200px] ">
            <img src={image} alt="" />
            <h3 className="font-bold">{title}</h3>
        </article>
     );
}
 
export default Business;