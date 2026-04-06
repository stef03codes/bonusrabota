import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrowelBricks, faHexagon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import {Field, FieldGroup} from "@/components/ui/field";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import Post from "@/app/tasker/components/Post";
import Marketing from "@/app/components/Marketing";

const posts = [
    {
        name: 'Милена',
        numPosts: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illo libero magnam mollitia quasi.',
        createdAt: 'пред 11 минути',
        location: 'Скопје',
    },
    {
        name: 'Тони',
        numPosts: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illo libero magnam mollitia quasi.',
        createdAt: 'пред 7 часа',
        location: 'Прилеп',
    },
    {
        name: 'Климент',
        numPosts: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illo libero magnam mollitia quasi.',
        createdAt: 'пред 30 минути',
        location: 'Охрид',
    }
];

export default function PostsPage() {
    return (
        <main>
            <div className='p-7 rounded-md border mx-10'>
                <h1 className='text-center text-5xl font-bold '>Постови за Таскери</h1>
            </div>
            <div className='flex justify-center items-start gap-4 mx-10 mt-10'>
                <div className='w-1/3'>
                    <h3 className='text-lg font-bold'>Спецификации</h3>
                    <div className='rounded-md border p-3 mt-3'>
                        <FieldGroup>
                            <Field orientation="horizontal">
                                <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                <FontAwesomeIcon icon={faLightbulb} />
                                <Label htmlFor="terms-checkbox">Електричар</Label>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                <FontAwesomeIcon icon={faHexagon} />
                                <Label htmlFor="terms-checkbox">Плочкар</Label>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="terms-checkbox" name="terms-checkbox" />
                                <FontAwesomeIcon icon={faTrowelBricks} />
                                <Label htmlFor="terms-checkbox">Ѕидар</Label>
                            </Field>
                        </FieldGroup>
                    </div>
                </div>
                <div className='w-3/4'>
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            name={post.name}
                            numPosts={post.numPosts}
                            description={post.description}
                            createdAt={post.createdAt}
                            location={post.location}
                        />
                    ))}
                </div>
                <div className='w-1/3'>
                    <Marketing/>
                </div>
            </div>
        </main>
    )
}