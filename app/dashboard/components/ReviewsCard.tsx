import Review from "@/app/dashboard/components/Review";
import ReviewsDialog from "@/app/dashboard/components/ReviewsDialog";

const reviews = [
    {
        user: 'Божидар Дунчевиќ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id itaque minima minus molestiae.',
        rating: 5
    },
    {
        user: 'Петар Петровски',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id itaque minima minus molestiae.',
        rating: 4
    },
    {
        user: 'Иван Ивановски',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id itaque minima minus molestiae.',
        rating: 3
    }
];

export default function ReviewCard() {
    return (
        <div className='p-7 rounded-md border mt-3'>
            <h2 className='text-2xl font-bold'>Рецензии (5)</h2>
            {reviews.map((review, index) => (
                <Review
                    user={review.user}
                    description={review.description}
                    rating={review.rating}
                    key={index}
                />
            ))}
            <ReviewsDialog/>
        </div>
    );
}