import Image from "next/image";
import Link from "next/link";

const TvCards = (props) => {
    const { TvCard } = props
    let poster_path = `https://image.tmdb.org/t/p/w500${TvCard.poster_path}`
    if (TvCard.poster_path == null) {
        poster_path = 'https://i.imgur.com/wjVuAGb.png'
    }
    return (
    <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
    <div className="rounded-md overflow-hidden">
        <Link key={TvCard.id} href="/tv/[id]" as={`/tv/${TvCard.id}`}>
        <a title={TvCard.title}>
        <Image className="w-11/12 hover:opacity-70" title={TvCard.title} src={poster_path} alt={TvCard.title} width="1500px" height="2250px"/>
        </a>
        </Link>
    </div>
    </div>           
     );
}
 
export default TvCards;