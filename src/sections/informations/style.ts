import styled from "styled-components";

export const Wrapper = styled.section`
	margin: 124px 0;
	.main__container{
		display: flex;
		flex-direction: column;
		gap: 64px;
		.header{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 24px;
			p{
				font-size: 18px;
				color: #9B9B9B;
				text-align: center;
			}
		}
		.all__information{
			display: flex;
			flex-direction: column;
			gap: 32px;
			.informations{
				display: flex;
				flex-direction: column;
				gap: 14px;
				h4{
					font-size: 24px;
				}
				p{
					font-size: 18px;
					line-height: 32px;
					color: #9B9B9B;
				}
			}
		}
	}
`