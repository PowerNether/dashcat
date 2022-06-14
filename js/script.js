window.addEventListener('load', function () {
    const selects = document.querySelectorAll(".filter-objects__select select");
    Array.from(selects).forEach((el) => {
      $(el).selectric({
				nativeOnMobile: false
			});
			const label = el.parentNode.parentNode.querySelector('.label') || null
			const title = el.parentNode.parentNode.parentNode.querySelector('.title')
			const placeholder = el.parentNode.querySelector('.placeholder') || null
			const select = el.parentNode.parentNode.querySelector('.selectric')
			const parent = el.parentNode.parentNode;
			const amount = parent.parentNode.querySelector('.amount') || null
      if (label !== null) {
        if (label.textContent === placeholder.textContent && !parent.classList.contains('default')) {
          label.style['color'] = '#808080'
          label.style['opacity'] = '0'
          title.style['top'] = '50%'
          title.style['font-size'] = '15px'
        }
			
        if (label.textContent !== placeholder.textContent) {
          label.style['color'] = '#333333'
          label.style['opacity'] = '1'
          title.style['top'] = '14px'
          title.style['font-size'] = '11px'
          select.style['border'] = '1px solid #ACA3D9'
          select.style['background'] = '#F7F6FB'
        }
      }
			$(el).on('selectric-change', function () {
			  if (!parent.classList.contains('default')) {
				if (label.textContent === placeholder.textContent) {
					label.style['color'] = '#808080'
					label.style['opacity'] = '0'
					title.style['top'] = '50%'
					title.style['font-size'] = '15px'
					select.style['border'] = '1px solid #CCCCCC'
					select.style['background'] = '#FFFFFF'
					amount.style.opacity = 0
				} else {
					if (amount !== null) {
						amount.innerHTML = parent.querySelectorAll('.selected').length
						amount.style.opacity = 1
					}
					label.style['color'] = '#333333'
					label.style['opacity'] = '1'
					title.style['top'] = '14px'
					title.style['font-size'] = '11px'
					select.style['border'] = '1px solid #ACA3D9'
					select.style['background'] = '#F7F6FB'
				}
			  }
			})
			$(el).on('selectric-open', function () {
				if (!parent.classList.contains('default')) {
					title.style['z-index'] = '100001'
				}
			})
			$(el).on('selectric-close', function () {
				if (!parent.classList.contains('default')) {
					title.style['z-index'] = '1'
				}
			})
    });

	let dashcatSelectsAllI = 0;
    let dashcatSelectsAll = document.querySelector('.seo .dashcat__head .dashcat__select input') || null;
	let dashcatSelects = Array.from(document.querySelectorAll('.seo .dashcat__body .dashcat__select input')) || null;

    if (dashcatSelectsAll !== null) {
		dashcatSelectsAll.addEventListener('change', function () {
			if (this.checked) {
				dashcatSelects.forEach(check => {
					check.checked = true;
					dashcatSelectsAllI++
				});
			} else {
				dashcatSelects.forEach(check => {
					if (check.checked) {
						dashcatSelectsAllI--
					}
					check.checked = false;
				});
			};
		});
    };

    if (dashcatSelects !== null) {
		dashcatSelects.forEach(check => {
			check.addEventListener('change', function () {
				if (check.checked) {
					dashcatSelectsAllI++;
				} else {
					dashcatSelectsAllI--;
				}
				if (dashcatSelects.length === dashcatSelectsAllI) {
					dashcatSelectsAll.checked = true
					dashcatSelectsAll.parentNode.classList.remove('notall')
				} else if (dashcatSelectsAllI === 0) {
					dashcatSelectsAll.checked = false
					dashcatSelectsAll.parentNode.classList.remove('notall')
				} else {
					dashcatSelectsAll.checked = true
					dashcatSelectsAll.parentNode.classList.add('notall')
				}
			})
		})
    };

	let DdashcatSelectsAllI = 0;
    let DdashcatSelectsAll = document.querySelector('.default .dashcat__head .dashcat__select input') || null;
	let DdashcatSelects = Array.from(document.querySelectorAll('.default .dashcat__body .dashcat__select input')) || null;

    if (DdashcatSelectsAll !== null) {
		DdashcatSelectsAll.addEventListener('change', function () {
			if (this.checked) {
				DdashcatSelects.forEach(check => {
					check.checked = true;
					DdashcatSelectsAllI++
				});
			} else {
				DdashcatSelects.forEach(check => {
					if (check.checked) {
						DdashcatSelectsAllI--
					}
					check.checked = false;
				});
			};
		});
    };

    if (DdashcatSelects !== null) {
		DdashcatSelects.forEach(check => {
			check.addEventListener('change', function () {
				if (check.checked) {
					DdashcatSelectsAllI++;
				} else {
					DdashcatSelectsAllI--;
				}
				if (DdashcatSelects.length === DdashcatSelectsAllI) {
					DdashcatSelectsAll.checked = true
					DdashcatSelectsAll.parentNode.classList.remove('notall')
				} else if (DdashcatSelectsAllI === 0) {
					DdashcatSelectsAll.checked = false
					DdashcatSelectsAll.parentNode.classList.remove('notall')
				} else {
					DdashcatSelectsAll.checked = true
					DdashcatSelectsAll.parentNode.classList.add('notall')
				}
			})
		})
    };

	let dashcat__switchs = Array.from(document.querySelectorAll('.dashcat__switch input')) || null;

	if (dashcat__switchs !== null) {
		dashcat__switchs.forEach(input => {
			input.addEventListener('change', function () {
				if (this.checked) {
					let tableClass = this.getAttribute('data-dashcat');
					Array.from(document.querySelectorAll('.dashcat__table')).forEach(table => {
						table.classList.remove('active')
					})
					document.querySelector(`.dashcat__table.${tableClass}`).classList.add('active')
				}
			})
		})
	}
})
