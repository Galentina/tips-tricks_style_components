import styled, { css } from 'styled-components';


// @ts-ignore
// @ts-ignore
// @ts-ignore
export const TagWrapper = styled.span.attrs((props) => ({
    mode: props.mode,
}))`
  
      display: flex;
      align-items: center;
      padding: 8px 14px;
      color: var(--color-2);
      color: ${(props) => !props.mode && '#161619'};
      cursor: pointer;
      background-color: var(--color-4);
      background-color: ${(props) => !props.mode && '#fff'};
      border: 2px solid;
      border-color: transparent;
      border-color: ${(props) => !props.mode && '#d1dafe'};
      border-radius: 30px;
      transition: border-color 0.1s ease;
    
      &:hover {
        border-color: var(--color-6);
      }
    
      &[data-active='true'] {
        border-color: var(--color-3);
      }
    
      & svg {
        --size: 24px;
    
        width: var(--size);
        height: var(--size);
        margin-right: 5px;
      }
    
      @media screen and (max-width: 1024px) {
        padding: 5px 7px;
        font-size: 14px;
        border: 1px solid;
        border-radius: 20px;
      }
`;
