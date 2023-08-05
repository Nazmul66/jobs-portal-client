import image from "../../../public/assets/images.png"

const technology = [
    {
        image: image,
        name: "Frontend Developer"
    },
    {
        image: image,
        name: "React JS" 
    },
    {
        image: image,
        name: "PHP" 
    },
    {
        image: image,
        name: "Javascript" 
    },
    {
        image: image,
        name: "UI/UX Design" 
    },
    {
        image: image,
        name: "Motion Graphics" 
    },
    {
        image: image,
        name: "PHP & Laravel" 
    },
    {
        image: image,
        name: "Scala" 
    },
    {
        image: image,
        name: "Wordpress" 
    },
    {
        image: image,
        name: "Ruby & Rails" 
    },
]

const PopularJobSection = () => {
    return (
        <div className="py-10 px-5 bg-[#f6f7fa]">
             <h2 className="text-center text-[#000] font-bold mb-8 text-[28px]">Popular Categories</h2>
            <div className="max-w-[1140px] mx-auto grid lg:grid-cols-5 grid-cols-1 gap-7">
                {
                    technology.map((tech, index) => <div key={index} className="bg-white py-10 px-6">
                           <div className="w-[60px] h-[60px] rounded-full mx-auto bg-[#BED8D2] flex justify-center items-center mb-4">
                               <img src={tech.image} alt="" className="" />
                           </div>
                           <h4 className="text-center text-[#000] font-semibold">{tech.name}</h4>
                    </div>)
                }

            </div> 
        </div>
    );
};

export default PopularJobSection;