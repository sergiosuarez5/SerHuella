import Data from '../components/Data';
import Header from '../components/Header';
import './Home.css';


const Home = () => {
    return (
        <div className="container-fluid">
            <h3 className='text-center mt-5'>SerHuella |</h3>
            <div className="container py-4">
                <div className="row">
                    {Data.products.map((item, index) => {
                        return (
                            <Data img={item.img} title={item.title} desc={item.desc} price={item} key={index}/>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
