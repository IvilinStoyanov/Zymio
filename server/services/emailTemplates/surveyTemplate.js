const keys = require('../../config/keys');

module.exports = survey => {
    return `
    <html>
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px; background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:24px;font-family:'Rubik',sans-serif;">
                                        Thanks for choosing Zymio
                                        </h1>
                                        <p style="font-size:15px; color:#455056; margin:8px 0 0; line-height:24px;">
                                            ${survey.body}</p>

                                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/bad"
                                            style="background:#4b8967;
                                            text-decoration:none !important;
                                            display:inline-block;
                                            font-weight:500; 
                                            margin-top:24px; 
                                            color:#fff;
                                            text-transform:uppercase;
                                            font-size:14px;
                                            padding:10px 24px;
                                            display:inline-block;
                                            border-radius:6px;">
                                            Bad
                                        </a>
                                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/good"
                                            style="background:#4b8967;
                                            text-decoration:none !important;
                                            display:inline-block;
                                            font-weight:500; 
                                            margin-top:24px; 
                                            color:#fff;
                                            text-transform:uppercase;
                                            font-size:14px;
                                            padding:10px 24px;
                                            display:inline-block;
                                            border-radius:6px;">
                                            Good
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </body>
    </html>
    `;
};