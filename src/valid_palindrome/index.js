const isPalindrome = (s) => {
    const _s = s.replace(/(\s|[^\w]|_)/g, '');

    return (
        _s.toLocaleLowerCase() ===
        _s.toLocaleLowerCase().split('').reverse().join('')
    );
};
export default isPalindrome;
