import getProductsFromDb from "@/utilis/getProductsFromDb";
import Image from "next/image";

const ProductsPage = async () => {
  const products = await getProductsFromDb();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products Page: {products?.length}</h1>
      <div className="grid grid-cols-2 gap-4">
        {products?.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <div className="h-[400px] w-[420px]">
              <Image
                width={360}
                height={420}
                className="rounded-lg mx-auto flex items-center justify-center"
                src={product.photo}
                alt={product.name}
              ></Image>
            </div>
            <h2 className="text-lg font-semibold">{product.productName}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-blue-500 mt-2">{product.userEmail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
