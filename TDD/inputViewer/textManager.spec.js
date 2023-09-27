describe('텍스트 관리자입니다.', () => {

    const textManager = new TextManager();


    it('텍스트 값을 가져옵니다.', () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    });

});