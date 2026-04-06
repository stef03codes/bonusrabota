export interface UserAccount {
    name: string;
    email: string;
    role: string;
    // account_id: number;
    tel: string;
    business: string;
    niches?: string;
    legal_name?: string;
    createdAt: string;
}

const getUserData = async (authToken: string) => {
    const userResponse = await fetch(`${process.env.XANO_BASE_URL}/api:QqYQmNog/auth/me`, {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    });

    if (!userResponse.ok) {
        throw new Error('Грешка при обид за преземање на вашиот профил!');
    }

    const userData = await userResponse.json();

    const userDetailsResponse = await fetch(`${process.env.XANO_BASE_URL}/api:n1yrZCo3/account/details?account_id=${userData.account_id}`);

    if (!userDetailsResponse.ok) {
        throw new Error('Грешка при обид за преземање на вашиот профил!');
    }

    const userDetails = await userDetailsResponse.json();

    const user: UserAccount = {
        name: userData.name,
        email: userData.email,
        role: userData.role,
        tel: userDetails.tel,
        business: userDetails.business,
        niches: (userData.role === 'tasker') ? userDetails.niches : '',
        legal_name: (userData.role === 'tasker') ? userDetails.legal_name : '',
        createdAt: userDetails.created_at
    };

    return user;
}

const getUserPosts = async () => {

}

export default getUserData;