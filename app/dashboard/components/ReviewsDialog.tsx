import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import Review from "@/app/dashboard/components/Review";

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
    },
    {
        user: 'Иван Ивановски',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id itaque minima minus molestiae.',
        rating: 3
    },
    {
        user: 'Иван Ивановски',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id itaque minima minus molestiae.',
        rating: 3
    }
];

export default function ReviewsDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='mt-3 w-full bg-green-400 cursor-pointer'>Види ги сите</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Сите ваши рецензии</DialogTitle>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                    {reviews.map((review, index) => (
                        <Review
                            key={index}
                            user={review.user}
                            description={review.description}
                            rating={review.rating}
                        />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}