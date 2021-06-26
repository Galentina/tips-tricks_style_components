import styled from 'styled-components';

export const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    grid-area: menu;
    align-items: center;
    justify-content: center;
    width: var(--nav-width);
    font-weight: 800;
    background-color: var(--color-2);
    border-right: 1px solid var(--color-6);

    & h1 {
        margin: 0 0 50px;
        font-family: 'Abril Fatface', sans-serif;
        font-weight: 900;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        cursor: pointer;
        user-select: none;
        background: linear-gradient(
            to right,
            crimson,
            deepskyblue,
            springgreen
        );
        background-clip: text;
        background-size: 200% 200%;
        transition: color 0.2s ease-in-out;
        animation: rainbow 2s ease-in-out infinite;

        &:hover {
            color: rgba(0, 0, 0, 0);
        }
    }

    & a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80px;
        font-size: 14px;
        font-weight: 500;
        color: var(--color-4);
        text-decoration: none;
        cursor: pointer;
        transition: color 0.1s ease;

        &:hover,
        &[aria-current='page'],
        &.active {
            color: var(--color-5);
        }
    }

    @keyframes rainbow {
        0% {
            background-position: left;
        }

        50% {
            background-position: right;
        }

        100% {
            background-position: left;
        }
    }

    @media screen and (max-width: 1024px) {
        bottom: unset;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        width: 100%;

        & h1 {
            width: 100%;
            margin-bottom: 0;
        }

        & a {
            width: calc(100% / 7);
        }
    }

    @media screen and (max-width: 768px) {
        & h1 {
            font-size: 28px;
        }

        & a {
            height: 50px;
            font-size: 0;
        }
    }
`;
