function CartOverview() {
  return (
    <div className='bg-stone-800 text-stone-200 px-4 py-4  flex items-center justify-between ' >
      <p className='space-x-4 font-semibold text-stone-300  sm:space-x-6 flex items-center'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="/Cart">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
