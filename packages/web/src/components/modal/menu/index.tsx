import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal, { ModalProps } from 'styled-react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { RestaurantMenuType } from '@/types/restaurants';
import text from '@/const/text';
import { isTablet } from '@/helpers/media';

import Thumbnail from '@/components/modal/menu/thumbnail';
import Options from '@/components/modal/menu/options';

type ModalComponentProps = ModalProps & {
	menu: RestaurantMenuType | null;
	topDishes: string[];
	isLoading: boolean;
	onClose: () => void;
};

const StyledModal = styled(Modal)`
	bottom: 0;
`;

const Wrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	position: absolute;
	bottom: 0;

	background-color: ${(props) => props.theme.colors.white};
	border-radius: 1rem 1rem 0 0;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		width: auto;
		min-width: 35rem;

		position: initial;

		border-radius: 1rem;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
`;

const Title = styled.h3`
	flex: 1;

	font-size: 1.25rem;
	text-align: center;

	margin-left: 4rem;
	padding: 0.5rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: 1.75rem;
	}
`;

const CloseWrapper = styled.div`
	width: 4rem;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
`;

const Content = styled.div`
	padding: 0.75rem 1rem;
`;

const PriceWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	margin-bottom: 0.5rem;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.grey3};
`;

const Price = styled.h4`
	font-size: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: 1.25rem;
	}
`;

const Recommend = styled.h4`
	font-size: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: 1.25rem;
	}
`;

const ModalMenuComponent = ({ menu, topDishes, isLoading, isOpen, onClose }: ModalComponentProps) => {
	const [tablet, setTablet] = useState(false);
	const [isTopDish, setIsTopDish] = useState(false);

	// TODO: create custom hook for this feature
	const getIsTablet = () => {
		setTablet(isTablet());
	};

	useEffect(() => {
		window.addEventListener('resize', getIsTablet);

		return () => {
			window.removeEventListener('resize', getIsTablet);
		};
	}, []);

	useEffect(() => {
		if (menu && topDishes.length && topDishes.includes(menu.id)) {
			setIsTopDish(true);
		} else {
			setIsTopDish(false);
		}
	}, [menu?.id, topDishes]);

	if (!menu) {
		return null;
	}

	return (
		<StyledModal isOpen={isOpen} onBackgroundClick={onClose} onEscapeKeydown={onClose}>
			<Wrapper>
				<TitleWrapper>
					<Title>{menu.name}</Title>
					<CloseWrapper onClick={onClose}>
						<FontAwesomeIcon icon={tablet ? faXmark : faChevronDown} />
					</CloseWrapper>
				</TitleWrapper>

				<Thumbnail thumbnail={menu.thumbnailImage} large={menu.largeImage || null} alt={menu.name} />

				<Content>
					<PriceWrapper>
						<Price>
							{text.price} {menu.fullPrice} {text.baht}
						</Price>
						{isTopDish && <Recommend>{text.recommend}</Recommend>}
					</PriceWrapper>

					<Options options={menu.options || null} isLoading={isLoading} />
				</Content>
			</Wrapper>
		</StyledModal>
	);
};

export default ModalMenuComponent;
