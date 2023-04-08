import styled from 'styled-components';
import Modal, { ModalProps } from 'styled-react-modal';

import { RestaurantFullMenuType } from '@/types/restaurants';
import text from '@/const/text';

type ModalComponentProps = ModalProps & {
	menu: RestaurantFullMenuType;
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

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
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
	font-size: 1.75rem;
	text-align: center;

	margin: 0.5rem auto;
`;

const Close = styled.div``;

const ThumbnailImage = styled.img`
	width: 100%;
	height: 20rem;

	object-fit: cover;
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
	font-size: 1.25rem;
`;

const Recommend = styled.h4`
	font-size: 1.25rem;
`;

const Options = styled.div`
	margin-bottom: 1rem;
`;

const OptionsTitle = styled.h5`
	font-size: 1rem;
	margin-bottom: 0.5rem;
`;

const OptionsChoices = styled.div``;

const OptionsChoice = styled.div`
	font-size: 0.9rem;
	line-height: 1.5rem;

	display: flex;
	justify-content: space-between;
`;

const ModalComponent = ({ menu, isOpen }: ModalComponentProps) => {
	return (
		<StyledModal isOpen={isOpen}>
			<Wrapper>
				<TitleWrapper>
					<Title>{menu.name}</Title>
					<Close>Close</Close>
				</TitleWrapper>

				{menu.largeImage && <ThumbnailImage src={menu.largeImage} alt={menu.name} />}

				<Content>
					<PriceWrapper>
						<Price>
							{text.price} {menu.fullPrice} {text.baht}
						</Price>
						<Recommend>{text.recommend}</Recommend>
					</PriceWrapper>

					{menu.options.length &&
						menu.options.map((option, optionIndex) => (
							<Options key={optionIndex}>
								<OptionsTitle>{option.label}</OptionsTitle>
								{option.choices.length && (
									<OptionsChoices>
										{option.choices.map((choice, choiceIndex) => (
											<OptionsChoice key={choiceIndex}>
												<span>{choice.label}</span>
												<span>{text.free}</span>
											</OptionsChoice>
										))}
									</OptionsChoices>
								)}
							</Options>
						))}
				</Content>
			</Wrapper>
		</StyledModal>
	);
};

export default ModalComponent;
