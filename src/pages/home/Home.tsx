import { Button } from "../../components/ui/button";
import CartItem from "../../components/CartItem";
// import { useGetAllProductQuery } from "../../redux/slices/productApiSlice";
// import Skeleton from "../../components/Skeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Home = () => {
  const products = useSelector((state: RootState) => state.product.product);
  // const { data: products, error, isLoading } = useGetAllProductQuery();
  // if (error) return <p className="text-red-500">Error loading products.</p>;
  return (
    <main className="flex flex-col pb-14 ">
      <div className="w-full sm:h-[60%] px-4 py-4 grid grid-cols-3 gap-4">
        {products!
          .filter((_, idx) => idx <= 2)
          .map((product, index) => (
            <CartItem product={product} key={index} index={index} />
          ))}
      </div>

      <div className="marquee-container">
        <div className="marquee-content space-x-4">
          {products?.map((product, index) => {
            return (
              // <div className="min-w-[200px] flex-shrink-0 bg-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg">
              //   Box 1
              // </div>
              <div
                key={index}
                className={`relative overflow-hidden h-full  border w-[400px] hover:[&>.first]:scale-105 hover:border-[#2563EB] rounded-xl cursor-pointer 
             `}>
                <div className="flex first justify-center w-full items-center h-fit transition-all">
                  <img
                    src={product.img}
                    alt={product.name}
                    className={`w-48 h-fit  object-cover`}
                  />
                </div>
                {/* </div> */}

                <div
                  className={`
                       absolute "bg-gradient-to-r from-white border bottom-7   backdrop-blur-sm  to-[#CACACA] bg-transparent flex  px-1 py-1 justify-center items-center h-fit w-fit  left-7  text-md p gap-3 rounded-full font-semibold text-black`}>
                  <h1 className="text-sm">{product.name}</h1>
                  <Button
                    variant="default"
                    className="rounded-full hover:bg-[#2563e94b] h-fit w-fit p-2 bg-[#2562E9] text-white">
                    ${product.price.toFixed(2)} USD
                  </Button>
                </div>
              </div>
              // </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
