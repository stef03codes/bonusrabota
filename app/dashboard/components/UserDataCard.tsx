import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faCircle,
    faEnvelope,
    faEye,
    faPhone,
    faRankingStar,
    faUserTie
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@/components/ui/button";
import EditUserDataDialog from "@/app/dashboard/components/EditUserDataDialog";

interface UserViewModel {
    name: string;
    email: string;
    role: string;
    tel: string;
    rating: number;
    createdAt: string;
    views: number;
    status: string;
}

export default function UserDataCard() {
    const userViewModel: UserViewModel = {
        name: 'Стефан Тасковски',
        createdAt: "04/04/2026",
        email: "stefan@gmail.com",
        rating: 3,
        role: "poster",
        status: "vacation",
        tel: "076 629 508",
        views: 10
    }

    return (
        <div className='p-7 rounded-md border'>
            <h2 className='text-3xl font-bold'>{userViewModel.name}</h2>
            <p className='mt-3'>
                <FontAwesomeIcon icon={faUserTie} className='me-2' />
                <span>
                    {(() => {
                        let role: string = '';
                        switch (userViewModel.role) {
                            case "poster": role = "Постер"; break;
                            case "tasker": role = "Таскер"; break;
                            case "both": role = "Двојна"; break;
                        }
                        return role;
                    })()}
                </span>
            </p>
            <p className='mt-2'>
                <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                <span>{userViewModel.email}</span>
            </p>
            <p className='mt-2'>
                <FontAwesomeIcon icon={faPhone} className='me-2' />
                <span>{userViewModel.tel}</span>
            </p>
            <p className='mb-3 mt-2'>
                <FontAwesomeIcon icon={faRankingStar} className='me-2' />
                <span>Рејтинг: {userViewModel.rating}</span>
            </p>
            <hr/>
            <p className='mt-3'>
                <FontAwesomeIcon icon={faCircle} className='me-2' />
                <span>Статус:
                    {(() => {
                        let status = <span></span>;
                        switch (userViewModel.status) {
                            case "active": status =
                                <span className='px-2 pb-1 bg-green-500 text-white rounded-md'>активен</span>;
                            break;
                            case "paused": status =
                                <span className='px-2 pb-1 bg-yellow-500 text-white rounded-md'>паузиран</span>;
                            break;
                            case "vacation": status =
                                <span className='px-2 pb-1 bg-blue-500 text-white rounded-md'>на одмор</span>;
                            break;
                        }
                        return status;
                    })()}
                </span>
            </p>
            <p className='mt-2'>
                <FontAwesomeIcon icon={faEye} className='me-2' />
                <span>Прегледи: {userViewModel.views}</span>
            </p>
            <p className='mt-2'>
                <FontAwesomeIcon icon={faCalendarDays} className='me-2' />
                <span>Регистриран: {userViewModel.createdAt}</span>
            </p>
            <EditUserDataDialog/>
        </div>
    );
}