const Review = ({stjerner, review, navn}) => {
  return (
    <article className="bg-[#FDFBF7] text-gray-700 flex flex-col gap-3 justify-center shadow-xl items-center p-4 rounded-xl">
      <div className="flex text-xl">{stjerner}</div>
      <p>{review}</p>
      <p>
        <b>{navn}</b>
      </p>
    </article>
  );
};

export default Review;
