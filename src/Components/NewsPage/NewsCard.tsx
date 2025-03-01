import NewsImg from '../../../public/assets/newsImg.png'

const NewsCard = () => {
  return (
    <div >
        <h1 className='font-[900] text-3xl mb-[18px] text-primaryBlue'>სიახლეები</h1>
        <img src={NewsImg} alt="News Image" />
        <p className='font-montserrat text-primaryBlue mt-[26px]'>Racha with Love დაგეხმარება დაგეგმო შენი მოგზაურობა რაჭაში და დაუვიწყარი თავგადასავლის მონაწილე გახდე. ვენთან ერთად შეძლებ დაჯავშნო სასტუმროები, დაგეგმო ტურები და შეიძინო ადგილობრივი მეწარმეების მიერ დამზადებული ნივთები. ამ ყველაფერს მხოლოდ ერთი პლათფორმის საშუალებით ერთ სივრცეში შეძლებთ.</p>
    </div>
  )
}

export default NewsCard