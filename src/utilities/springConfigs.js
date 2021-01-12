const fromTransitionAbove = {
    opacity: 0,
    transform: "translateY(-10px)",
};

const toTransitionAbove = {
    opacity: 1,
    transform: "translateY(0)",
};

const fromTransitionLeft = {
    opacity: 0,
    transform: "translateX(20px)",
};

const toTransitionLeft = {
    opacity: 1,
    transform: "translateX(0)",
};

const fromTransitionRight = {
    opacity: 0,
    transform: "translateX(-20px)",
};

const toTransitionRight = {
    opacity: 1,
    transform: "translateX(0)",
};

const enterAbove = (boolean) => ({
    to: boolean ? toTransitionAbove : fromTransitionAbove,
    from: fromTransitionAbove,
});

const enterRight = (boolean) => ({
    to: boolean ? toTransitionRight : fromTransitionRight,
    from: fromTransitionRight,
});

const enterLeft = (boolean) => ({
    to: boolean ? toTransitionLeft : fromTransitionLeft,
    from: fromTransitionLeft,
});

export { enterAbove, enterLeft, enterRight };
