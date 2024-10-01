import { useParams } from 'react-router-dom';

export const ProfileUserPage = () => {
	const { userName } = useParams();
	return (
		<>
			<h1 style={{color: "white"}}>Hello {userName}</h1>
		</>
	)
}