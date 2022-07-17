import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper style={{'--border': '1px solid var(--color-gray-300)', '--border-spacing': '16px'}}>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 48px 0;
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 386px 273px;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--border-spacing);
    border-right: var(--border);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.tabletAndUp} {
    padding-left: var(--border-spacing);
  }
  
  @media ${QUERIES.laptopAndUp} {
    padding-right: var(--border-spacing);
    margin-bottom: var(--border-spacing);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  
  @media ${QUERIES.laptopAndUp} {
    padding-left: var(--border-spacing);
    border-left: var(--border);
    margin-bottom: var(--border-spacing);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    padding-top: var(--border-spacing);
    border-top: var(--border);
    margin-left: var(--border-spacing);
  }
`;

export default MainStoryGrid;
