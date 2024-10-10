import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import React from 'react';
import { CapacitorFlash } from '@capgo/capacitor-flash';
const Home: React.FC = () => {
	const [isLight, setIsLight] = React.useState(false);

	const switchLight = async (value: boolean) => {
		setIsLight(value);
		if(value) {
			await CapacitorFlash.switchOn({intensity: 100});
		} else {
			await CapacitorFlash.switchOff();
		}
	};

	return (
		<IonPage>
			<IonContent fullscreen>
				<IonHeader>
					<IonToolbar className='ion-text-center'>
						<IonTitle>Flash</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonGrid>
					<IonRow>
						<IonCol className='ion-text-center'>
							<IonText>{isLight ? 'La linterna esta encendida' : 'La linterna esta apagada'}</IonText>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className='ion-text-center ion-margin-top'>
							<IonToggle checked={isLight} onIonChange={(e) => switchLight(e.detail.checked)} />
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Home;
