const nodemailer = require('nodemailer');

const html_temp = ` <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
	<!--[if gte mso 9]>
	<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="format-detection" content="date=no">
	<meta name="format-detection" content="address=no">
	<meta name="format-detection" content="telephone=no">
	<meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
   	<link href="https://fonts.googleapis.com/css?family=Kreon:400,700|Playfair+Display:400,400i,700,700i|Raleway:400,400i,700,700i|Roboto:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
	<title>Hello! Thank you for your interest in working w/ Ticon!</title>
	<!--[if gte mso 9]>
	<style type="text/css" media="all">
		sup { font-size: 100% !important; }
	</style>
	<![endif]-->


	<style type="text/css" media="screen">
		/* Linked Styles */
		body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#1e52bd; -webkit-text-size-adjust:none }
		a { color:#000001; text-decoration:none }
		p { padding:0 !important; margin:0 !important }
		img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
		.mcnPreviewText { display: none !important; }
		.text-footer2 a { color: #ffffff; }

		/* Mobile styles */
		@media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
			.mobile-shell { width: 100% !important; min-width: 100% !important; }

			.m-center { text-align: center !important; }
			.m-left { text-align: left !important; margin-right: auto !important; }

			.center { margin: 0 auto !important; }
			.content2 { padding: 8px 15px 12px !important; }
			.t-left { float: left !important; margin-right: 30px !important; }
			.t-left-2  { float: left !important; }

			.td { width: 100% !important; min-width: 100% !important; }

			.content { padding: 30px 15px !important; }
			.section { padding: 30px 15px 0px !important; }

			.m-br-15 { height: 15px !important; }
			.mpb5 { padding-bottom: 5px !important; }
			.mpb15 { padding-bottom: 15px !important; }
			.mpb20 { padding-bottom: 20px !important; }
			.mpb30 { padding-bottom: 30px !important; }
			.mp30 { padding-bottom: 30px !important; }
			.m-padder { padding: 0px 15px !important; }
			.m-padder2 { padding-left: 15px !important; padding-right: 15px !important; }
			.p70 { padding: 30px 0px !important; }
			.pt70 { padding-top: 30px !important; }
			.p0-15 { padding: 0px 15px !important; }
			.p30-15 { padding: 30px 15px !important; }
			.p30-15-0 { padding: 30px 15px 0px 15px !important; }
			.p0-15-30 { padding: 0px 15px 30px 15px !important; }


			.text-footer { text-align: center !important; }

			.m-td,
			.m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

			.m-block { display: block !important; }

			.fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }

			.column,
			.column-dir,
			.column-top,
			.column-empty,
			.column-top-30,
			.column-top-60,
			.column-empty2,
			.column-bottom { float: left !important; width: 100% !important; display: block !important; }

			.column-empty { padding-bottom: 15px !important; }
			.column-empty2 { padding-bottom: 30px !important; }

			.content-spacing { width: 15px !important; }
		}
	</style>
</head>
<body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#1e52bd; -webkit-text-size-adjust:none;">
<!--*|IF:MC_PREVIEW_TEXT|*-->
		<!--[if !gte mso 9]><!-->
		<span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">Hello! Thank you for your interest in working w/ Ticon!</span>
		<!--<![endif]-->
	<!--*|END:IF|*-->
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#1e52bd">
		<tbody><tr>
			<td align="center" valign="top">
				<!-- Main -->
				<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
					<tbody><tr>
						<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
							<!-- Header -->
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td class="p30-15" style="padding: 40px 0px 20px 0px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tbody><tr>
												<th class="column-top" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tbody><tr>

														</tr>
													</tbody></table>
												</th>
												<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tbody><tr>
															<td align="right">
																<table class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
																	<tbody><tr>
																		<td class="img" width="32" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/14" width="14" height="13" mc:edit="image_1" style="max-width:14px;" border="0" alt=""></a></td>
																		<td class="img" width="32" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/14" width="14" height="13" mc:edit="image_2" style="max-width:14px;" border="0" alt=""></a></td>
																		<td class="img" width="32" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/14" width="14" height="13" mc:edit="image_3" style="max-width:14px;" border="0" alt=""></a></td>
																		<td class="img" width="32" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/14" width="14" height="13" mc:edit="image_4" style="max-width:14px;" border="0" alt=""></a></td>
																		<td class="img" width="14" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/14" width="14" height="13" mc:edit="image_5" style="max-width:14px;" border="0" alt=""></a></td>
																	</tr>
																</tbody></table>
															</td>
														</tr>
													</tbody></table>
												</th>
											</tr>
										</tbody></table>
									</td>
								</tr>
								<!-- END Top bar -->
								<!-- Logo -->
								<tr>
									<td bgcolor="#ffffff" class="p30-15 img-center" style="padding: 30px; border-radius: 20px 20px 0px 0px; font-size:0pt; line-height:0pt; text-align:center;"><a href="#" target="_blank"><img src="https://via.placeholder.com/146x17" width="146" height="17" mc:edit="image_6" style="max-width:146px;" border="0" alt=""></a></td>
								</tr>
								<!-- END Logo -->
								<!-- Nav -->
								<tr>

								</tr>
								<!-- END Nav -->
							</tbody></table>
							<!-- END Header -->

							<!-- Section 1 -->
							<div mc:repeatable="Select" mc:variant="Section 1">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ebebeb">
									<tbody><tr>
										<td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://via.placeholder.com/650x358" width="650" height="358" mc:edit="image_7" style="max-width:650px;" border="0" alt=""></td>
									</tr>
									<tr>
										<td class="p30-15-0" style="padding: 50px 30px 0px;" bgcolor="#ffffff">
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tbody><tr>
													<td class="h5-center" style="color:#a1a1a1; font-family:'Raleway', Arial,sans-serif; font-size:16px; line-height:22px; text-align:center; padding-bottom:5px;"><div mc:edit="text_3">Ticon labs LLC</div></td>
												</tr>
												<tr>
													<td class="h2-center" style="color:#000000; font-family:'Playfair Display', Times, 'Times New Roman', serif; font-size:32px; line-height:36px; text-align:center; padding-bottom:20px;"><div mc:edit="text_4">Welcome to our World!</div></td>
												</tr>
												<tr>
													<td class="text-center" style="color:#5d5c5c; font-family:'Raleway', Arial,sans-serif; font-size:14px; line-height:22px; text-align:center; padding-bottom:22px;"><div mc:edit="text_5">Here at Ticon we strive at perfection, and our work speaks for itself.</div></td>
												</tr>
												<tr>
													<td align="center">
														<table border="0" cellspacing="0" cellpadding="0">
															<tbody><tr>
																<td class="text-button-orange" style="background:#e85711; color:#ffffff; font-family:'Kreon', 'Times New Roman', Georgia, serif; font-size:14px; line-height:18px; text-align:center; padding:10px 30px; border-radius:20px;"><div mc:edit="text_6"><a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">View More</span></a></div></td>
															</tr>
														</tbody></table>
													</td>
												</tr>
											</tbody></table>
										</td>
									</tr>
								</tbody></table>
							</div>
							<!-- END Section 1 -->

							<!-- Section 2 -->

							<!-- END Section 2 -->

							<!-- Section 3 -->

							<!-- END Section 3 -->

							<!-- Section 4 -->





							<!-- END Section 5 -->

							<!-- Section 6 -->
							<div mc:repeatable="Select" mc:variant="Section 6">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
									<tbody><tr>
										<td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="images/free_white_blue.jpg" width="650" height="160" mc:edit="image_17" style="max-width:650px;" border="0" alt=""></td>
									</tr>
									<tr>
										<td class="p0-15" style="padding: 0px 30px;" bgcolor="#dde8fd">
											<table width="100%" border="0" cellspacing="0" cellpadding="0">
												<tbody><tr>
													<td>
														<table width="100%" border="0" cellspacing="0" cellpadding="0">
															<tbody><tr>
																<th class="column-top" width="280" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																	<table width="100%" border="0" cellspacing="0" cellpadding="0">
																		<tbody><tr>
																			<td>
																				<table width="100%" border="0" cellspacing="0" cellpadding="0">
																					<tbody><tr>
																						<td bgcolor="#ffffff" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#dde8fd" class="border" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%;"><tbody><tr><td bgcolor="#dde8fd" height="40" class="border" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%;">&nbsp;</td></tr></tbody></table>
</td>
																						<td class="img-center" valign="top" width="80" style="font-size:0pt; line-height:0pt; text-align:center;"><img src="https://via.placeholder.com/80" width="80" height="80" mc:edit="image_18" style="max-width:80px;" border="0" alt=""></td>
																						<td bgcolor="#ffffff" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#dde8fd" class="border" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%;"><tbody><tr><td bgcolor="#dde8fd" height="40" class="border" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%;">&nbsp;</td></tr></tbody></table>
</td>
																					</tr>
																				</tbody></table>
																				<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
																					<tbody><tr>
																						<td class="content" style="padding:30px;">
																							<table width="100%" border="0" cellspacing="0" cellpadding="0">
																								<tbody><tr>
																									<td class="img-center pb20" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom:20px;"><img src="images/orange_quote.jpg" width="26" height="20" mc:edit="image_19" style="max-width:26px;" border="0" alt=""></td>
																								</tr>
																								<tr>
																									<td class="text-center" style="color:#5d5c5c; font-family:'Raleway', Arial,sans-serif; font-size:14px; line-height:22px; text-align:center; padding-bottom:22px;">
																										<div mc:edit="text_35"><em>Lorem ipsum dolor sit amet, dolore.Lorem ipsum dolor sit set do amet, dolore consectetur eta adipisicing elit sed do!</em></div>
																									</td>
																								</tr>
																								<tr>
																									<td class="text-2 center" style="color:#000000; font-family:'Playfair Display', Times, 'Times New Roman', serif; font-size:14px; line-height:22px; text-align:center;"><div mc:edit="text_36">— Jessie Doe</div></td>
																								</tr>
																							</tbody></table>
																						</td>
																					</tr>
																				</tbody></table>
																			</td>
																		</tr>
																	</tbody></table>
																</th>
																<th class="column-empty2" width="30" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; direction:ltr;"></th>
																<th class="column-top" width="280" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
																	<table width="100%" border="0" cellspacing="0" cellpadding="0">
																		<tbody><tr>
																			<td>
																				<table width="100%" border="0" cellspacing="0" cellpadding="0">
																					<tbody><tr>
																						<td bgcolor="#ffffff" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#dde8fd" class="border" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%;"><tbody><tr><td bgcolor="#dde8fd" height="40" class="border" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%;">&nbsp;</td></tr></tbody></table>
</td>
																						<td class="img-center" valign="top" width="80" style="font-size:0pt; line-height:0pt; text-align:center;"><img src="https://via.placeholder.com/80" width="80" height="80" mc:edit="image_20" style="max-width:80px;" border="0" alt=""></td>
																						<td bgcolor="#ffffff" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#dde8fd" class="border" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%;"><tbody><tr><td bgcolor="#dde8fd" height="40" class="border" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%;">&nbsp;</td></tr></tbody></table>
</td>
																					</tr>
																				</tbody></table>
																				<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
																					<tbody><tr>
																						<td class="content" style="padding:30px;">
																							<table width="100%" border="0" cellspacing="0" cellpadding="0">
																								<tbody><tr>
																									<td class="img-center pb20" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom:20px;"><img src="images/orange_quote.jpg" width="26" height="20" mc:edit="image_21" style="max-width:26px;" border="0" alt=""></td>
																								</tr>
																								<tr>
																									<td class="text-center" style="color:#5d5c5c; font-family:'Raleway', Arial,sans-serif; font-size:14px; line-height:22px; text-align:center; padding-bottom:22px;">
																										<div mc:edit="text_37"><em>Lorem ipsum dolor sit amet, dolore.Lorem ipsum dolor sit set do amet, dolore consectetur eta adipisicing elit sed do!</em></div>
																									</td>
																								</tr>
																								<tr>
																									<td class="text-2 center" style="color:#000000; font-family:'Playfair Display', Times, 'Times New Roman', serif; font-size:14px; line-height:22px; text-align:center;"><div mc:edit="text_38">— Jessie Doe</div></td>
																								</tr>
																							</tbody></table>
																						</td>
																					</tr>
																				</tbody></table>
																			</td>
																		</tr>
																	</tbody></table>
																</th>
															</tr>
														</tbody></table>
													</td>
												</tr>
											</tbody></table>
										</td>
									</tr>
									<tr>
										<td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="images/free_blue_white.jpg" width="650" height="160" mc:edit="image_22" style="max-width:650px;" border="0" alt=""></td>
									</tr>
								</tbody></table>
							</div>
							<!-- END Section 6 -->

							<!-- Section 7 -->
							<div mc:repeatable="Select" mc:variant="Section 7">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
									<tbody><tr>

									</tr>
								</tbody></table>
							</div>
							<!-- END Section 7 -->

							<!-- Section 8 -->
							<div mc:repeatable="Select" mc:variant="Section 8">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#1546a9">
									<tbody><tr>
										<td class="p30-15" style="padding: 70px 30px;" align="center">
											<table class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
												<tbody><tr>
													<th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
														<table class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
															<tbody><tr>
																<td class="img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://via.placeholder.com/91x27" width="91" height="27" mc:edit="image_23" style="max-width:91px;" border="0" alt=""></td>
																<td class="content-spacing" width="45" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
																<td class="img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://via.placeholder.com/91x27" width="116" height="27" mc:edit="image_24" style="max-width:116px;" border="0" alt=""></td>
															</tr>
														</tbody></table>
													</th>
													<th class="column-empty" width="45" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; direction:ltr;"></th>
													<th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
														<table class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
															<tbody><tr>
																<td class="img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://via.placeholder.com/91x27" width="87" height="39" mc:edit="image_25" style="max-width:87px;" border="0" alt=""></td>
																<td class="content-spacing" width="45" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
																<td class="img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://via.placeholder.com/91x27" width="100" height="39" mc:edit="image_26" style="max-width:100px;" border="0" alt=""></td>
															</tr>
														</tbody></table>
													</th>
												</tr>
											</tbody></table>
										</td>
									</tr>
								</tbody></table>
							</div>
							<!-- END Section 8 -->

							<!-- White Padder -->

							<!-- END White Padder -->

							<!-- Blue Padder -->

							<!-- END Blue Padder -->


							<!-- Footer -->
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td class="p30-15-0" bgcolor="#ffffff" style="border-radius: 0px 0px 20px 20px; padding: 70px 30px 0px 30px;">
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
										 	<tbody><tr>
												<td class="m-padder2 pb30" align="center" style="padding-bottom:30px;">
													<table class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
														<tbody><tr>
															<td class="img" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/27" width="26" height="26" mc:edit="image_27" style="max-width:26px;" border="0" alt=""></a></td>
															<td class="img" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/27" width="26" height="26" mc:edit="image_28" style="max-width:26px;" border="0" alt="" https:="" via.placeholder.com=""></a></td>
															<td class="img" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/27" width="26" height="26" mc:edit="image_29" style="max-width:26px;" border="0" alt=""></a></td>
															<td class="img" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/27" width="26" height="26" mc:edit="image_30" style="max-width:26px;" border="0" alt=""></a></td>
															<td class="img" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/27" width="26" height="26" mc:edit="image_31" style="max-width:26px;" border="0" alt=""></a></td>
															<td class="img" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/27" width="26" height="26" mc:edit="image_32" style="max-width:26px;" border="0" alt=""></a></td>
															<td class="img" width="40" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/27" width="26" height="26" mc:edit="image_33" style="max-width:26px;" border="0" alt=""></a></td>
															<td class="img" width="26" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"><img src="https://via.placeholder.com/27" width="26" height="26" mc:edit="image_34" style="max-width:26px;" border="0" alt=""></a></td>
														</tr>
													</tbody></table>
												</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
							</tbody></table>
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td class="text-footer2 p30-15" style="padding: 30px 15px 50px 15px; color:#a9b6e0; font-family:'Raleway', Arial,sans-serif; font-size:12px; line-height:22px; text-align:center;">
										<div mc:edit="text_58">Want to change how you receive these emails? <br>You can <a class="link-white" target="_blank" href="*|UPDATE_PROFILE|*" style="color:#ffffff; text-decoration:none;">update your preferences</a> or <a class="link-white" target="_blank" href="*|UNSUB|*" style="color:#ffffff; text-decoration:none;">unsubscribe</a> from this list.</div>
									</td>
								</tr>
							</tbody></table>
							<!-- END Footer -->
						</td>
					</tr>
				</tbody></table>
				<!-- END Main -->

			</td>
		</tr>
	</tbody></table>


 </body></html> `

// async..await is not allowed in global scope, must use a wrapper
async function main(from,to,subject="",text="") {

    // console.error(from,to,subject,text,html)
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        pool: true,
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 46s5, false for other ports
        auth: {
            user: "absalomcherinet01@gmail.com", // generated ethereal user
            pass: "plzzxzcxjqhhdmxq" // generated ethereal password
        }
    });

    // let transporter = nodemailer.createTransport({
    //     pool: true,
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     secure: false, // true for 46s5, false for other ports
    //     auth: {
    //       user: testAccount.user, // generated ethereal user
    //       pass: testAccount.pass  // generated ethereal password
    //     }
    // });

    let info;

    if (to == "Ticonlabs@gmail.com"){
    info = await transporter.sendMail({
        from,
        to,
        subject,
        text
      });
    }else{

    // send mail with defined transport object
       info = await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html: html_temp
      });
    }

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);
let sendMail = (from,to,subject,text,html) => main(from,to,subject,text,html).catch(err => console.log(err))
// console.log("sendMail" + sendMail())
module.exports = {sendMail}
