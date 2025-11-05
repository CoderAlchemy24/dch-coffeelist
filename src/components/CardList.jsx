
import Card from "./Card";

export default function CardList({coffeelist, popular, soldOut}) {

    return(
        <div className="card-list flex flex-row gap-12 flex-wrap justify-center items-center my-12">
            {coffeelist.map((coffee)=>(
             
                <Card 
                 
                  key={coffee.id}
                  img={coffee.image}
                  name={coffee.name}
                  price={coffee.price}
                  rating={coffee.rating}
                  votes={coffee.votes}

                  popular={!!popular?.[coffee.id - 1]}
                  soldOut={!!soldOut?.[coffee.id - 1]}
                  className="min-w-65 min-h-57"
                />
))}
       
        </div>
    );
    
}