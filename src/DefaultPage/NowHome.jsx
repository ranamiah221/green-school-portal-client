
import banner from '../assets/newBanner.jpg'

const NowHome = () => {
    return (
        <div className='h-screen flex justify-between items-center gap-5 w-full'>
            {/* animation image */}
            <div className='w-1/2 h-screen'>
                <img className='h-full' src={banner} alt="" />
            </div>
            {/* text animation */}
            <div className='w-1/2 h-screen pr-5'>
                <h1 className='text-6xl font-bold pt-16'>Welcome To Green Bridge School</h1>
                <p className='text-justify my-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Consectetur recusandae voluptate ex animi unde hic amet ullam nisi quia tenetur adipisci, 
                    ad vel iste quae, error ea neque molestias, et obcaecati quis temporibus repellendus possimus!
                     Nostrum exercitationem esse, quidem similique magni eius, molestiae quia, reprehenderit architecto
                      deleniti dolorem vel eligendi.</p>
                <div className='mt-5'>
                    <button className="rounded-lg border-b-4 mr-5 w-32 text-base font-medium border-b-amber-500 py-2 px-5 text-blue-500">Register</button>
                    
                </div>
            </div>

        </div>
    );
};

export default NowHome;