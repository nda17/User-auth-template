import styles from '@/components/ui/no-network-notification/NoNetworkNotification.module.scss';
import SubHeading from '@/components/ui/sub-heading/SubHeading';
import { FC } from 'react';

const NoNetworkNotification: FC = () => {
	return (
		<div className={styles.wrapper}>
			<SubHeading text={'There is no internet connection.'} />
			<SubHeading
				text={'When the network appears,the page will resume work.'}
			/>
		</div>
	);
};

export default NoNetworkNotification;
