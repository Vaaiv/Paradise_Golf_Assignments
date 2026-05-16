const seasonBtns = document.querySelectorAll('.season-btn');
const monthlyCard = document.getElementById('monthlyCard');
const monthlyCols = document.querySelectorAll('.monthly-col');
const cardsGrid = document.querySelector('.cards-grid');

/* all pricing hardcoded here — no backend or API needed for this */
const pricing = {

  year: {
    silver: {
      amount: '$24/month',
      billing: 'billed once annually ($288)'
    },
    gold: {
      amount: '$29/month',
      billing: 'billed once annually ($348)'
    },
    platinum: {
      amount: '$34/month',
      billing: 'billed once annually ($408)'
    }
  },

  summer: {
    silver: {
      amount: '$30/month',
      billing: 'seasonal billing ($180)'
    },
    gold: {
      amount: '$35/month',
      billing: 'seasonal billing ($210)'
    },
    platinum: {
      amount: '$40/month',
      billing: 'seasonal billing ($240)'
    },
    monthly: {
      amount: '$45/month',
      billing: '+ $20 activation fee'
    }
  },

  winter: {
    silver: {
      amount: '$23/month',
      billing: 'seasonal billing ($138)'
    },
    gold: {
      amount: '$28/month',
      billing: 'seasonal billing ($168)'
    },
    platinum: {
      amount: '$33/month',
      billing: 'seasonal billing ($198)'
    },
    monthly: {
      amount: '$40/month',
      billing: '+ $20 activation fee'
    }
  }

};

/* swaps price and billing text on each card when the season changes */
function updatePricing(season) {

  const cards = ['silver', 'gold', 'platinum'];

  cards.forEach(function(tier) {

    const card = document.querySelector('.card-' + tier);
    const priceEl = card.querySelector('.card-price strong');
    const billingEl = card.querySelector('.card-billing');

    priceEl.textContent = pricing[season][tier].amount;
    billingEl.textContent = pricing[season][tier].billing;

  });

  // monthly only exists on summer and winter so we check before updating
  if (pricing[season].monthly) {

    const monthlyPrice = monthlyCard.querySelector('.card-price strong');
    const monthlyBilling = monthlyCard.querySelector('.card-billing');

    monthlyPrice.textContent = pricing[season].monthly.amount;
    monthlyBilling.textContent = pricing[season].monthly.billing;

  }

}

/* shows or hides the monthly card and its table column based on season */
function toggleMonthly(season) {

  if (season === 'summer' || season === 'winter') {

    monthlyCard.style.display = 'inline-block';
    cardsGrid.classList.add('four-cards'); // shrinks all cards to fit four in a row

    monthlyCols.forEach(function(col) {
      col.style.display = 'table-cell';
    });

  } else {

    monthlyCard.style.display = 'none';
    cardsGrid.classList.remove('four-cards'); // back to three cards at 30% each

    monthlyCols.forEach(function(col) {
      col.style.display = 'none';
    });

  }

}

/* removes active from all buttons then sets it on whichever was clicked */
function setActiveBtn(clickedBtn) {

  seasonBtns.forEach(function(btn) {
    btn.classList.remove('active');
  });

  clickedBtn.classList.add('active');

}

/* listen for clicks on each season button and run all three updates together */
seasonBtns.forEach(function(btn) {

  btn.addEventListener('click', function() {

    const season = btn.dataset.season;

    setActiveBtn(btn);
    toggleMonthly(season);
    updatePricing(season);

  });

});