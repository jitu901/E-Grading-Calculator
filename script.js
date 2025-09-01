document.getElementById("ssc").addEventListener("click", function () {

    /*On Click*/
    ssc = document.getElementById('ssc')
    ssc.style.background = '#056085'
    ssc.style.color = '#f8f9fa'
    hsc = document.getElementById('hsc')
    hsc.style.background = '#f8f9fa'
    hsc.style.color = '#056085'

    /*Science*/
    document.getElementById("science").addEventListener("click", function () {

        /*On Click*/
        science = document.getElementById('science')
        science.style.background = '#056085'
        science.style.color = '#f8f9fa'
        commerce = document.getElementById('commerce')
        commerce.style.background = '#f8f9fa'
        commerce.style.color = '#056085'
        arts = document.getElementById('arts')
        arts.style.background = '#f8f9fa'
        arts.style.color = '#056085'
        mark_enter_warn = document.getElementById('mark_enter_warn')
        mark_enter_warn.style.display = 'none'
        marks = document.getElementById('marks')
        marks.style.display = 'block'
        input = document.getElementById('input')
        input.style.display = 'block'

        /*Grading Calculation*/
        document.getElementById("submit").addEventListener("click", function () {
            /*Grading Variable Declare*/
            s1m = document.getElementById("s1m").value;
            s1g = 0;
            s2m = document.getElementById("s2m").value;
            s2g = 0;
            s3m = document.getElementById("s3m").value;
            s3g = 0;
            s4m = document.getElementById("s4m").value;
            s4g = 0;
            s5m = document.getElementById("s5m").value;
            s5g = 0;
            s6m = document.getElementById("s6m").value;
            s6g = 0;
            s7m = document.getElementById("s7m").value;
            s7g = 0;
            s8m = document.getElementById("s8m").value;
            s8g = 0;
            s9m = document.getElementById("s9m").value;
            s9g = 0;
            s10m = document.getElementById("s10m").value;
            s10g = 0;
            s11m = document.getElementById("s11m").value;
            s11g = 0;
            s12m = document.getElementById("s12m").value;
            s12g = 0;

            /*Input Check*/
            if (!s1m || !s2m || !s3m || !s4m || !s5m || !s6m || !s7m || !s8m || !s9m || !s10m || !s11m || !s12m) {
                document.getElementById("mark_warn").style.display = 'block';
                return;
            }

            /*Calculation for all subjects*/
            switch (true) {
                case s1m >= 160: s1g = 5; break;
                case s1m >= 140: s1g = 4; break;
                case s1m >= 120: s1g = 3.5; break;
                case s1m >= 100: s1g = 3; break;
                case s1m >= 80: s1g = 2; break;
                case s1m >= 66: s1g = 1; break;
                case s1m < 66: s1g = 0; break;
                default: s1g = 0;
            }

            switch (true) {
                case s2m >= 160: s2g = 5; break;
                case s2m >= 140: s2g = 4; break;
                case s2m >= 120: s2g = 3.5; break;
                case s2m >= 100: s2g = 3; break;
                case s2m >= 80: s2g = 2; break;
                case s2m >= 66: s2g = 1; break;
                case s2m < 66: s2g = 0; break;
                default: s2g = 0;
            }

            switch (true) {
                case s3m >= 80: s3g = 5; break;
                case s3m >= 70: s3g = 4; break;
                case s3m >= 60: s3g = 3.5; break;
                case s3m >= 50: s3g = 3; break;
                case s3m >= 40: s3g = 2; break;
                case s3m >= 33: s3g = 1; break;
                case s3m < 33: s3g = 0; break;
                default: s3g = 0;
            }

            switch (true) {
                case s4m >= 80: s4g = 5; break;
                case s4m >= 70: s4g = 4; break;
                case s4m >= 60: s4g = 3.5; break;
                case s4m >= 50: s4g = 3; break;
                case s4m >= 40: s4g = 2; break;
                case s4m >= 33: s4g = 1; break;
                case s4m < 33: s4g = 0; break;
                default: s4g = 0;
            }

            switch (true) {
                case s5m >= 80: s5g = 5; break;
                case s5m >= 70: s5g = 4; break;
                case s5m >= 60: s5g = 3.5; break;
                case s5m >= 50: s5g = 3; break;
                case s5m >= 40: s5g = 2; break;
                case s5m >= 33: s5g = 1; break;
                case s5m < 33: s5g = 0; break;
                default: s5g = 0;
            }

            switch (true) {
                case s6m >= 80: s6g = 5; break;
                case s6m >= 70: s6g = 4; break;
                case s6m >= 60: s6g = 3.5; break;
                case s6m >= 50: s6g = 3; break;
                case s6m >= 40: s6g = 2; break;
                case s6m >= 33: s6g = 1; break;
                case s6m < 33: s6g = 0; break;
                default: s6g = 0;
            }

            switch (true) {
                case s7m >= 40: s7g = 5; break;
                case s7m >= 35: s7g = 4; break;
                case s7m >= 30: s7g = 3.5; break;
                case s7m >= 25: s7g = 3; break;
                case s7m >= 20: s7g = 2; break;
                case s7m >= 17: s7g = 1; break;
                case s7m < 17: s7g = 0; break;
                default: s7g = 0;
            }

            switch (true) {
                case s8m >= 80: s8g = 5; break;
                case s8m >= 70: s8g = 4; break;
                case s8m >= 60: s8g = 3.5; break;
                case s8m >= 50: s8g = 3; break;
                case s8m >= 40: s8g = 2; break;
                case s8m >= 33: s8g = 1; break;
                case s8m < 33: s8g = 0; break;
                default: s8g = 0;
            }

            switch (true) {
                case s9m >= 80: s9g = 5; break;
                case s9m >= 70: s9g = 4; break;
                case s9m >= 60: s9g = 3.5; break;
                case s9m >= 50: s9g = 3; break;
                case s9m >= 40: s9g = 2; break;
                case s9m >= 33: s9g = 1; break;
                case s9m < 33: s9g = 0; break;
                default: s9g = 0;
            }

            switch (true) {
                case s10m >= 40: s10g = 5; break;
                case s10m >= 35: s10g = 4; break;
                case s10m >= 30: s10g = 3.5; break;
                case s10m >= 25: s10g = 3; break;
                case s10m >= 20: s10g = 2; break;
                case s10m >= 17: s10g = 1; break;
                case s10m < 17: s10g = 0; break;
                default: s10g = 0;
            }

            switch (true) {
                case s11m >= 80: s11g = 5; break;
                case s11m >= 70: s11g = 4; break;
                case s11m >= 60: s11g = 3.5; break;
                case s11m >= 50: s11g = 3; break;
                case s11m >= 40: s11g = 2; break;
                case s11m >= 33: s11g = 1; break;
                case s11m < 33: s11g = 0; break;
                default: s11g = 0;
            }

            switch (true) {
                case s12m >= 80: s12g = 5; break;
                case s12m >= 70: s12g = 4; break;
                case s12m >= 60: s12g = 3.5; break;
                case s12m >= 50: s12g = 3; break;
                case s12m >= 40: s12g = 2; break;
                case s12m >= 33: s12g = 1; break;
                case s12m < 33: s12g = 0; break;
                default: s12g = 0;
            }

            /*Result*/
            document.getElementById("mark_warn").style.display = 'none';
            document.getElementById('gpa_warn').style.display = 'none';
            document.getElementById('gpa').style.display = 'block';
            document.getElementById("s1g").innerHTML = s1g.toFixed(2);
            document.getElementById("s2g").innerHTML = s2g.toFixed(2);
            document.getElementById("s3g").innerHTML = s3g.toFixed(2);
            document.getElementById("s4g").innerHTML = s4g.toFixed(2);
            document.getElementById("s5g").innerHTML = s5g.toFixed(2);
            document.getElementById("s6g").innerHTML = s6g.toFixed(2);
            document.getElementById("s7g").innerHTML = s7g.toFixed(2);
            document.getElementById("s8g").innerHTML = s8g.toFixed(2);
            document.getElementById("s9g").innerHTML = s9g.toFixed(2);
            document.getElementById("s10g").innerHTML = s10g.toFixed(2);
            document.getElementById("s11g").innerHTML = s11g.toFixed(2);
            document.getElementById("s12g").innerHTML = s12g.toFixed(2);

            /*Grand Total GPA*/
            switch (true) {
                case s1g === 0 || s2g === 0 || s3g === 0 || s4g === 0 || s5g === 0 || s6g === 0 ||
                    s7g === 0 || s8g === 0 || s9g === 0 || s10g === 0 || s11g === 0 || s12g === 0:
                    total = 0;
                    break;
                default:
                    total = (s1g + s2g + s3g + s4g + s5g + s6g + s7g + s8g + s9g + s10g + s11g + s12g) / 12;
            }
            document.getElementById("grade").innerHTML = total.toFixed(2);

            /*Comment*/
            switch (true) {
                case total > 4: cmnt = 'Congratulations! Excellent result!'; break;
                case total > 3: cmnt = 'Well done! Very good result!'; break;
                case total > 2: cmnt = 'Good effort! Keep improving!'; break;
                case total > 1: cmnt = 'You can do better! Keep trying!'; break;
                default: cmnt = "Don't give up! Work harder next time!";
            }
            document.getElementById("cmnt").innerHTML = cmnt;

        });
    })

    /*Commerce*/
    document.getElementById("commerce").addEventListener("click", function () {

        /*On Click*/
        science = document.getElementById('science')
        science.style.background = '#f8f9fa'
        science.style.color = '#056085'
        commerce = document.getElementById('commerce')
        commerce.style.background = '#056085'
        commerce.style.color = '#f8f9fa'
        arts = document.getElementById('arts')
        arts.style.background = '#f8f9fa'
        arts.style.color = '#056085'
        mark_enter_warn = document.getElementById('mark_enter_warn')
        mark_enter_warn.style.display = 'none'
        marks = document.getElementById('marks')
        marks.style.display = 'block'
        input = document.getElementById('input')
        input.style.display = 'block'
        document.getElementById('bgs').innerHTML = 'General Science'
        document.getElementById('phy').innerHTML = 'Accounting'
        document.getElementById('chem').innerHTML = 'Finance & Banking'

        /*Grading Calculation*/
        document.getElementById("submit").addEventListener("click", function () {
            /*Grading Variable Declare*/
            s1m = document.getElementById("s1m").value;
            s1g = 0;
            s2m = document.getElementById("s2m").value;
            s2g = 0;
            s3m = document.getElementById("s3m").value;
            s3g = 0;
            s4m = document.getElementById("s4m").value;
            s4g = 0;
            s5m = document.getElementById("s5m").value;
            s5g = 0;
            s6m = document.getElementById("s6m").value;
            s6g = 0;
            s7m = document.getElementById("s7m").value;
            s7g = 0;
            s8m = document.getElementById("s8m").value;
            s8g = 0;
            s9m = document.getElementById("s9m").value;
            s9g = 0;
            s10m = document.getElementById("s10m").value;
            s10g = 0;
            s11m = document.getElementById("s11m").value;
            s11g = 0;
            s12m = document.getElementById("s12m").value;
            s12g = 0;

            /*Input Check*/
            if (!s1m || !s2m || !s3m || !s4m || !s5m || !s6m || !s7m || !s8m || !s9m || !s10m || !s11m || !s12m) {
                document.getElementById("mark_warn").style.display = 'block';
                return;
            }

            /*Calculation for all subjects*/
            switch (true) {
                case s1m >= 160: s1g = 5; break;
                case s1m >= 140: s1g = 4; break;
                case s1m >= 120: s1g = 3.5; break;
                case s1m >= 100: s1g = 3; break;
                case s1m >= 80: s1g = 2; break;
                case s1m >= 66: s1g = 1; break;
                case s1m < 66: s1g = 0; break;
                default: s1g = 0;
            }

            switch (true) {
                case s2m >= 160: s2g = 5; break;
                case s2m >= 140: s2g = 4; break;
                case s2m >= 120: s2g = 3.5; break;
                case s2m >= 100: s2g = 3; break;
                case s2m >= 80: s2g = 2; break;
                case s2m >= 66: s2g = 1; break;
                case s2m < 66: s2g = 0; break;
                default: s2g = 0;
            }

            switch (true) {
                case s3m >= 80: s3g = 5; break;
                case s3m >= 70: s3g = 4; break;
                case s3m >= 60: s3g = 3.5; break;
                case s3m >= 50: s3g = 3; break;
                case s3m >= 40: s3g = 2; break;
                case s3m >= 33: s3g = 1; break;
                case s3m < 33: s3g = 0; break;
                default: s3g = 0;
            }

            switch (true) {
                case s4m >= 80: s4g = 5; break;
                case s4m >= 70: s4g = 4; break;
                case s4m >= 60: s4g = 3.5; break;
                case s4m >= 50: s4g = 3; break;
                case s4m >= 40: s4g = 2; break;
                case s4m >= 33: s4g = 1; break;
                case s4m < 33: s4g = 0; break;
                default: s4g = 0;
            }

            switch (true) {
                case s5m >= 80: s5g = 5; break;
                case s5m >= 70: s5g = 4; break;
                case s5m >= 60: s5g = 3.5; break;
                case s5m >= 50: s5g = 3; break;
                case s5m >= 40: s5g = 2; break;
                case s5m >= 33: s5g = 1; break;
                case s5m < 33: s5g = 0; break;
                default: s5g = 0;
            }

            switch (true) {
                case s6m >= 80: s6g = 5; break;
                case s6m >= 70: s6g = 4; break;
                case s6m >= 60: s6g = 3.5; break;
                case s6m >= 50: s6g = 3; break;
                case s6m >= 40: s6g = 2; break;
                case s6m >= 33: s6g = 1; break;
                case s6m < 33: s6g = 0; break;
                default: s6g = 0;
            }

            switch (true) {
                case s7m >= 40: s7g = 5; break;
                case s7m >= 35: s7g = 4; break;
                case s7m >= 30: s7g = 3.5; break;
                case s7m >= 25: s7g = 3; break;
                case s7m >= 20: s7g = 2; break;
                case s7m >= 17: s7g = 1; break;
                case s7m < 17: s7g = 0; break;
                default: s7g = 0;
            }

            switch (true) {
                case s8m >= 80: s8g = 5; break;
                case s8m >= 70: s8g = 4; break;
                case s8m >= 60: s8g = 3.5; break;
                case s8m >= 50: s8g = 3; break;
                case s8m >= 40: s8g = 2; break;
                case s8m >= 33: s8g = 1; break;
                case s8m < 33: s8g = 0; break;
                default: s8g = 0;
            }

            switch (true) {
                case s9m >= 80: s9g = 5; break;
                case s9m >= 70: s9g = 4; break;
                case s9m >= 60: s9g = 3.5; break;
                case s9m >= 50: s9g = 3; break;
                case s9m >= 40: s9g = 2; break;
                case s9m >= 33: s9g = 1; break;
                case s9m < 33: s9g = 0; break;
                default: s9g = 0;
            }

            switch (true) {
                case s10m >= 40: s10g = 5; break;
                case s10m >= 35: s10g = 4; break;
                case s10m >= 30: s10g = 3.5; break;
                case s10m >= 25: s10g = 3; break;
                case s10m >= 20: s10g = 2; break;
                case s10m >= 17: s10g = 1; break;
                case s10m < 17: s10g = 0; break;
                default: s10g = 0;
            }

            switch (true) {
                case s11m >= 80: s11g = 5; break;
                case s11m >= 70: s11g = 4; break;
                case s11m >= 60: s11g = 3.5; break;
                case s11m >= 50: s11g = 3; break;
                case s11m >= 40: s11g = 2; break;
                case s11m >= 33: s11g = 1; break;
                case s11m < 33: s11g = 0; break;
                default: s11g = 0;
            }

            switch (true) {
                case s12m >= 80: s12g = 5; break;
                case s12m >= 70: s12g = 4; break;
                case s12m >= 60: s12g = 3.5; break;
                case s12m >= 50: s12g = 3; break;
                case s12m >= 40: s12g = 2; break;
                case s12m >= 33: s12g = 1; break;
                case s12m < 33: s12g = 0; break;
                default: s12g = 0;
            }

            /*Result*/
            document.getElementById("mark_warn").style.display = 'none';
            document.getElementById('gpa_warn').style.display = 'none';
            document.getElementById('gpa').style.display = 'block';
            document.getElementById("s1g").innerHTML = s1g.toFixed(2);
            document.getElementById("s2g").innerHTML = s2g.toFixed(2);
            document.getElementById("s3g").innerHTML = s3g.toFixed(2);
            document.getElementById("s4g").innerHTML = s4g.toFixed(2);
            document.getElementById("s5g").innerHTML = s5g.toFixed(2);
            document.getElementById("s6g").innerHTML = s6g.toFixed(2);
            document.getElementById("s7g").innerHTML = s7g.toFixed(2);
            document.getElementById("s8g").innerHTML = s8g.toFixed(2);
            document.getElementById("s9g").innerHTML = s9g.toFixed(2);
            document.getElementById("s10g").innerHTML = s10g.toFixed(2);
            document.getElementById("s11g").innerHTML = s11g.toFixed(2);
            document.getElementById("s12g").innerHTML = s12g.toFixed(2);

            /*Grand Total GPA*/
            switch (true) {
                case s1g === 0 || s2g === 0 || s3g === 0 || s4g === 0 || s5g === 0 || s6g === 0 ||
                    s7g === 0 || s8g === 0 || s9g === 0 || s10g === 0 || s11g === 0 || s12g === 0:
                    total = 0;
                    break;
                default:
                    total = (s1g + s2g + s3g + s4g + s5g + s6g + s7g + s8g + s9g + s10g + s11g + s12g) / 12;
            }
            document.getElementById("grade").innerHTML = total.toFixed(2);

            /*Comment*/
            switch (true) {
                case total > 4: cmnt = 'Congratulations! Excellent result!'; break;
                case total > 3: cmnt = 'Well done! Very good result!'; break;
                case total > 2: cmnt = 'Good effort! Keep improving!'; break;
                case total > 1: cmnt = 'You can do better! Keep trying!'; break;
                default: cmnt = "Don't give up! Work harder next time!";
            }
            document.getElementById("cmnt").innerHTML = cmnt;

        });
    })

    /*Arts*/
    document.getElementById("arts").addEventListener("click", function () {

        /*On Click*/
        science = document.getElementById('science')
        science.style.background = '#f8f9fa'
        science.style.color = '#056085'
        commerce = document.getElementById('commerce')
        commerce.style.background = '#f8f9fa'
        commerce.style.color = '#056085'
        arts = document.getElementById('arts')
        arts.style.background = '#056085'
        arts.style.color = '#f8f9fa'
        mark_enter_warn = document.getElementById('mark_enter_warn')
        mark_enter_warn.style.display = 'none'
        marks = document.getElementById('marks')
        marks.style.display = 'block'
        input = document.getElementById('input')
        input.style.display = 'block'
        document.getElementById('bgs').innerHTML = 'General Science'
        document.getElementById('phy').innerHTML = 'History'
        document.getElementById('chem').innerHTML = 'Geography'

        /*Grading Calculation*/
        document.getElementById("submit").addEventListener("click", function () {
            /*Grading Variable Declare*/
            s1m = document.getElementById("s1m").value;
            s1g = 0;
            s2m = document.getElementById("s2m").value;
            s2g = 0;
            s3m = document.getElementById("s3m").value;
            s3g = 0;
            s4m = document.getElementById("s4m").value;
            s4g = 0;
            s5m = document.getElementById("s5m").value;
            s5g = 0;
            s6m = document.getElementById("s6m").value;
            s6g = 0;
            s7m = document.getElementById("s7m").value;
            s7g = 0;
            s8m = document.getElementById("s8m").value;
            s8g = 0;
            s9m = document.getElementById("s9m").value;
            s9g = 0;
            s10m = document.getElementById("s10m").value;
            s10g = 0;
            s11m = document.getElementById("s11m").value;
            s11g = 0;
            s12m = document.getElementById("s12m").value;
            s12g = 0;

            /*Input Check*/
            if (!s1m || !s2m || !s3m || !s4m || !s5m || !s6m || !s7m || !s8m || !s9m || !s10m || !s11m || !s12m) {
                document.getElementById("mark_warn").style.display = 'block';
                return;
            }

            /*Calculation for all subjects*/
            switch (true) {
                case s1m >= 160: s1g = 5; break;
                case s1m >= 140: s1g = 4; break;
                case s1m >= 120: s1g = 3.5; break;
                case s1m >= 100: s1g = 3; break;
                case s1m >= 80: s1g = 2; break;
                case s1m >= 66: s1g = 1; break;
                case s1m < 66: s1g = 0; break;
                default: s1g = 0;
            }

            switch (true) {
                case s2m >= 160: s2g = 5; break;
                case s2m >= 140: s2g = 4; break;
                case s2m >= 120: s2g = 3.5; break;
                case s2m >= 100: s2g = 3; break;
                case s2m >= 80: s2g = 2; break;
                case s2m >= 66: s2g = 1; break;
                case s2m < 66: s2g = 0; break;
                default: s2g = 0;
            }

            switch (true) {
                case s3m >= 80: s3g = 5; break;
                case s3m >= 70: s3g = 4; break;
                case s3m >= 60: s3g = 3.5; break;
                case s3m >= 50: s3g = 3; break;
                case s3m >= 40: s3g = 2; break;
                case s3m >= 33: s3g = 1; break;
                case s3m < 33: s3g = 0; break;
                default: s3g = 0;
            }

            switch (true) {
                case s4m >= 80: s4g = 5; break;
                case s4m >= 70: s4g = 4; break;
                case s4m >= 60: s4g = 3.5; break;
                case s4m >= 50: s4g = 3; break;
                case s4m >= 40: s4g = 2; break;
                case s4m >= 33: s4g = 1; break;
                case s4m < 33: s4g = 0; break;
                default: s4g = 0;
            }

            switch (true) {
                case s5m >= 80: s5g = 5; break;
                case s5m >= 70: s5g = 4; break;
                case s5m >= 60: s5g = 3.5; break;
                case s5m >= 50: s5g = 3; break;
                case s5m >= 40: s5g = 2; break;
                case s5m >= 33: s5g = 1; break;
                case s5m < 33: s5g = 0; break;
                default: s5g = 0;
            }

            switch (true) {
                case s6m >= 80: s6g = 5; break;
                case s6m >= 70: s6g = 4; break;
                case s6m >= 60: s6g = 3.5; break;
                case s6m >= 50: s6g = 3; break;
                case s6m >= 40: s6g = 2; break;
                case s6m >= 33: s6g = 1; break;
                case s6m < 33: s6g = 0; break;
                default: s6g = 0;
            }

            switch (true) {
                case s7m >= 40: s7g = 5; break;
                case s7m >= 35: s7g = 4; break;
                case s7m >= 30: s7g = 3.5; break;
                case s7m >= 25: s7g = 3; break;
                case s7m >= 20: s7g = 2; break;
                case s7m >= 17: s7g = 1; break;
                case s7m < 17: s7g = 0; break;
                default: s7g = 0;
            }

            switch (true) {
                case s8m >= 80: s8g = 5; break;
                case s8m >= 70: s8g = 4; break;
                case s8m >= 60: s8g = 3.5; break;
                case s8m >= 50: s8g = 3; break;
                case s8m >= 40: s8g = 2; break;
                case s8m >= 33: s8g = 1; break;
                case s8m < 33: s8g = 0; break;
                default: s8g = 0;
            }

            switch (true) {
                case s9m >= 80: s9g = 5; break;
                case s9m >= 70: s9g = 4; break;
                case s9m >= 60: s9g = 3.5; break;
                case s9m >= 50: s9g = 3; break;
                case s9m >= 40: s9g = 2; break;
                case s9m >= 33: s9g = 1; break;
                case s9m < 33: s9g = 0; break;
                default: s9g = 0;
            }

            switch (true) {
                case s10m >= 40: s10g = 5; break;
                case s10m >= 35: s10g = 4; break;
                case s10m >= 30: s10g = 3.5; break;
                case s10m >= 25: s10g = 3; break;
                case s10m >= 20: s10g = 2; break;
                case s10m >= 17: s10g = 1; break;
                case s10m < 17: s10g = 0; break;
                default: s10g = 0;
            }

            switch (true) {
                case s11m >= 80: s11g = 5; break;
                case s11m >= 70: s11g = 4; break;
                case s11m >= 60: s11g = 3.5; break;
                case s11m >= 50: s11g = 3; break;
                case s11m >= 40: s11g = 2; break;
                case s11m >= 33: s11g = 1; break;
                case s11m < 33: s11g = 0; break;
                default: s11g = 0;
            }

            switch (true) {
                case s12m >= 80: s12g = 5; break;
                case s12m >= 70: s12g = 4; break;
                case s12m >= 60: s12g = 3.5; break;
                case s12m >= 50: s12g = 3; break;
                case s12m >= 40: s12g = 2; break;
                case s12m >= 33: s12g = 1; break;
                case s12m < 33: s12g = 0; break;
                default: s12g = 0;
            }

            /*Result*/
            document.getElementById("mark_warn").style.display = 'none';
            document.getElementById('gpa_warn').style.display = 'none';
            document.getElementById('gpa').style.display = 'block';
            document.getElementById("s1g").innerHTML = s1g.toFixed(2);
            document.getElementById("s2g").innerHTML = s2g.toFixed(2);
            document.getElementById("s3g").innerHTML = s3g.toFixed(2);
            document.getElementById("s4g").innerHTML = s4g.toFixed(2);
            document.getElementById("s5g").innerHTML = s5g.toFixed(2);
            document.getElementById("s6g").innerHTML = s6g.toFixed(2);
            document.getElementById("s7g").innerHTML = s7g.toFixed(2);
            document.getElementById("s8g").innerHTML = s8g.toFixed(2);
            document.getElementById("s9g").innerHTML = s9g.toFixed(2);
            document.getElementById("s10g").innerHTML = s10g.toFixed(2);
            document.getElementById("s11g").innerHTML = s11g.toFixed(2);
            document.getElementById("s12g").innerHTML = s12g.toFixed(2);

            /*Grand Total GPA*/
            switch (true) {
                case s1g === 0 || s2g === 0 || s3g === 0 || s4g === 0 || s5g === 0 || s6g === 0 ||
                    s7g === 0 || s8g === 0 || s9g === 0 || s10g === 0 || s11g === 0 || s12g === 0:
                    total = 0;
                    break;
                default:
                    total = (s1g + s2g + s3g + s4g + s5g + s6g + s7g + s8g + s9g + s10g + s11g + s12g) / 12;
            }
            document.getElementById("grade").innerHTML = total.toFixed(2);

            /*Comment*/
            switch (true) {
                case total > 4: cmnt = 'Congratulations! Excellent result!'; break;
                case total > 3: cmnt = 'Well done! Very good result!'; break;
                case total > 2: cmnt = 'Good effort! Keep improving!'; break;
                case total > 1: cmnt = 'You can do better! Keep trying!'; break;
                default: cmnt = "Don't give up! Work harder next time!";
            }
            document.getElementById("cmnt").innerHTML = cmnt;

        });

    })

})
