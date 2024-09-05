// Функция генерации случайного баланса
function getRandomBalance() {
    return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

// Инициализация баланса
function initializeBalance() {
    let userBalance = localStorage.getItem('ratcoinBalance');
    if (!userBalance) {
        userBalance = getRandomBalance();
        localStorage.setItem('ratcoinBalance', userBalance);
    }
    document.getElementById('balance')?.textContent = userBalance + ' RatCoin';
}

// Проверка подписки пользователя
async function checkSubscription(userId) {
    const response = await fetch(`https://api.telegram.org/bot7534613410:AAHj1AFkC_L9oOA_05OpqQ_ejiZEUKjnSL4/getChatMember?chat_id=@RatcCoin&user_id=${userId}`);
    const data = await response.json();
    return data.result.status === 'member';
}

// Награда за выполнение задания
document.getElementById('claimTask')?.addEventListener('click', async () =>
