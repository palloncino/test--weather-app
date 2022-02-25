import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import {SectionMarginBottom, StyledArticlesGrid, StylePageContentContainer} from '../../Style';
import {useWeather} from '../../../hooks/useWeather';
import WeatherCard from '../../components/WeatherCard';
import WeatherForecastCards from '../../components/WeatherForecastCards';
import {Text} from '@fluentui/react';

const Home = ({theme}: IApplicationProps) => {
	const {currentLondonWeather, currentWeatherLoading, forecastLondonWeather, forecastWeatherLoading} = useWeather();
	return (
		<>
			<StylePageContentContainer>
				<SectionMarginBottom>
					<HeroHeader
						color={theme?.palette?.white}
						bgColor={`linear-gradient(113.96deg, ${theme?.palette?.themeDarker} 0%, ${theme?.palette?.themePrimary} 48.44%, ${theme?.palette?.themeDarker} 100%)`}
						headline={'What\'s the weather like?'} />
				</SectionMarginBottom>

				<SectionMarginBottom>
					<Text variant={'xLarge'} nowrap block>
						Current Weather
					</Text>
				</SectionMarginBottom>

				<SectionMarginBottom>
					<StyledArticlesGrid gridTemplateColumns={'repeat(2, 1fr)'}>
						<WeatherCard data={currentLondonWeather} loading={currentWeatherLoading} />
					</StyledArticlesGrid>
				</SectionMarginBottom>

				<SectionMarginBottom>
					<Text variant={'xLarge'} nowrap block>
						Weather forecast for the next 5 days
					</Text>
				</SectionMarginBottom>

				<SectionMarginBottom>
					<WeatherForecastCards data={forecastLondonWeather} loading={forecastWeatherLoading} />
				</SectionMarginBottom>
			</StylePageContentContainer>
		</>
	);
};

export default Home;
