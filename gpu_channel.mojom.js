
(function() {
  var mojomId = 'gpu/ipc/common/gpu_channel.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gpu.mojom');
  var capabilities$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/capabilities.mojom', 'capabilities.mojom.js');
  }
  var constants$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/constants.mojom', 'constants.mojom.js');
  }
  var context_result$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/context_result.mojom', 'context_result.mojom.js');
  }
  var context_type$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/context_type.mojom', 'context_type.mojom.js');
  }
  var gpu_feature_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/gpu_feature_info.mojom', 'gpu_feature_info.mojom.js');
  }
  var gpu_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/gpu_info.mojom', 'gpu_info.mojom.js');
  }
  var mailbox$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/mailbox.mojom', 'mailbox.mojom.js');
  }
  var shared_image_capabilities$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/shared_image_capabilities.mojom', 'shared_image_capabilities.mojom.js');
  }
  var shared_image_metadata$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/shared_image_metadata.mojom', 'shared_image_metadata.mojom.js');
  }
  var shared_image_pool_id$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/shared_image_pool_id.mojom', 'shared_image_pool_id.mojom.js');
  }
  var shared_image_pool_client_interface$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/shared_image_pool_client_interface.mojom', 'shared_image_pool_client_interface.mojom.js');
  }
  var surface_handle$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/surface_handle.mojom', 'surface_handle.mojom.js');
  }
  var sync_token$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/sync_token.mojom', 'sync_token.mojom.js');
  }
  var vulkan_ycbcr_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/vulkan_ycbcr_info.mojom', 'vulkan_ycbcr_info.mojom.js');
  }
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var shared_image_format$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/shared_image_format.mojom', '../../../services/viz/public/mojom/compositing/shared_image_format.mojom.js');
  }
  var image_info$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/image_info.mojom', '../../../skia/public/mojom/image_info.mojom.js');
  }
  var surface_origin$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/surface_origin.mojom', '../../../skia/public/mojom/surface_origin.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var buffer_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/buffer_types.mojom', '../../../ui/gfx/mojom/buffer_types.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/color_space.mojom', '../../../ui/gfx/mojom/color_space.mojom.js');
  }
  var gpu_fence_handle$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/gpu_fence_handle.mojom', '../../../ui/gfx/mojom/gpu_fence_handle.mojom.js');
  }
  var native_handle_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/native_handle_types.mojom', '../../../ui/gfx/mojom/native_handle_types.mojom.js');
  }
  var presentation_feedback$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/presentation_feedback.mojom', '../../../ui/gfx/mojom/presentation_feedback.mojom.js');
  }
  var gpu_preference$ =
      mojo.internal.exposeNamespace('gl.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gl/mojom/gpu_preference.mojom', '../../../ui/gl/mojom/gpu_preference.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }


  var SchedulingPriority = {};
  SchedulingPriority.kHigh = 0;
  SchedulingPriority.kNormal = 1;
  SchedulingPriority.kLow = 2;
  SchedulingPriority.MIN_VALUE = 0;
  SchedulingPriority.MAX_VALUE = 2;

  SchedulingPriority.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  SchedulingPriority.toKnownEnumValue = function(value) {
    return value;
  };

  SchedulingPriority.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function RasterCreationAttribs(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RasterCreationAttribs.prototype.initDefaults_ = function() {
  };
  RasterCreationAttribs.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RasterCreationAttribs.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RasterCreationAttribs.encodedSize = codec.kStructHeaderSize + 0;

  RasterCreationAttribs.decode = function(decoder) {
    var packed;
    var val = new RasterCreationAttribs();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  RasterCreationAttribs.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RasterCreationAttribs.encodedSize);
    encoder.writeUint32(0);
  };
  function GLESCreationAttribs(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GLESCreationAttribs.prototype.initDefaults_ = function() {
    this.gpuPreference = gpu_preference$.GpuPreference.kLowPower;
    this.failIfMajorPerfCaveat = false;
    this.contextType = context_type$.ContextType.kOpenGLES2;
  };
  GLESCreationAttribs.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GLESCreationAttribs.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GLESCreationAttribs.gpuPreference
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, gpu_preference$.GpuPreference);
    if (err !== validator.validationError.NONE)
        return err;



    // validate GLESCreationAttribs.contextType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, context_type$.ContextType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GLESCreationAttribs.encodedSize = codec.kStructHeaderSize + 16;

  GLESCreationAttribs.decode = function(decoder) {
    var packed;
    var val = new GLESCreationAttribs();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gpuPreference =
        decoder.decodeStruct(new codec.Enum(gpu_preference$.GpuPreference));
    packed = decoder.readUint8();
    val.failIfMajorPerfCaveat = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.contextType =
        decoder.decodeStruct(new codec.Enum(context_type$.ContextType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GLESCreationAttribs.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GLESCreationAttribs.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.gpuPreference);
    packed = 0;
    packed |= (val.failIfMajorPerfCaveat & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.contextType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WebGPUCreationAttribs(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebGPUCreationAttribs.prototype.initDefaults_ = function() {
  };
  WebGPUCreationAttribs.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebGPUCreationAttribs.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebGPUCreationAttribs.encodedSize = codec.kStructHeaderSize + 0;

  WebGPUCreationAttribs.decode = function(decoder) {
    var packed;
    var val = new WebGPUCreationAttribs();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebGPUCreationAttribs.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebGPUCreationAttribs.encodedSize);
    encoder.writeUint32(0);
  };
  function CreateCommandBufferParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CreateCommandBufferParams.prototype.initDefaults_ = function() {
    this.streamId = 0;
    this.streamPriority = 0;
    this.attribs = null;
    this.activeUrl = null;
    this.label = null;
  };
  CreateCommandBufferParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CreateCommandBufferParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CreateCommandBufferParams.streamPriority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, SchedulingPriority);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateCommandBufferParams.attribs
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, ContextCreationAttribs, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateCommandBufferParams.activeUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateCommandBufferParams.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CreateCommandBufferParams.encodedSize = codec.kStructHeaderSize + 40;

  CreateCommandBufferParams.decode = function(decoder) {
    var packed;
    var val = new CreateCommandBufferParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.streamId =
        decoder.decodeStruct(codec.Int32);
    val.streamPriority =
        decoder.decodeStruct(new codec.Enum(SchedulingPriority));
    val.attribs =
        decoder.decodeStruct(ContextCreationAttribs);
    val.activeUrl =
        decoder.decodeStructPointer(url$.Url);
    val.label =
        decoder.decodeStruct(codec.String);
    return val;
  };

  CreateCommandBufferParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CreateCommandBufferParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.streamId);
    encoder.encodeStruct(codec.Int32, val.streamPriority);
    encoder.encodeStruct(ContextCreationAttribs, val.attribs);
    encoder.encodeStructPointer(url$.Url, val.activeUrl);
    encoder.encodeStruct(codec.String, val.label);
  };
  function CommandBufferState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferState.prototype.initDefaults_ = function() {
    this.getOffset = 0;
    this.token = 0;
    this.releaseCount = 0;
    this.error = 0;
    this.contextLostReason = 0;
    this.generation = 0;
    this.setGetBufferCount = 0;
  };
  CommandBufferState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;





    // validate CommandBufferState.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, constants$.Error);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommandBufferState.contextLostReason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 20, constants$.ContextLostReason);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CommandBufferState.encodedSize = codec.kStructHeaderSize + 32;

  CommandBufferState.decode = function(decoder) {
    var packed;
    var val = new CommandBufferState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.getOffset =
        decoder.decodeStruct(codec.Int32);
    val.token =
        decoder.decodeStruct(codec.Int32);
    val.releaseCount =
        decoder.decodeStruct(codec.Uint64);
    val.error =
        decoder.decodeStruct(new codec.Enum(constants$.Error));
    val.contextLostReason =
        decoder.decodeStruct(new codec.Enum(constants$.ContextLostReason));
    val.generation =
        decoder.decodeStruct(codec.Uint32);
    val.setGetBufferCount =
        decoder.decodeStruct(codec.Uint32);
    return val;
  };

  CommandBufferState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.getOffset);
    encoder.encodeStruct(codec.Int32, val.token);
    encoder.encodeStruct(codec.Uint64, val.releaseCount);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.encodeStruct(codec.Int32, val.contextLostReason);
    encoder.encodeStruct(codec.Uint32, val.generation);
    encoder.encodeStruct(codec.Uint32, val.setGetBufferCount);
  };
  function SwapBuffersCompleteParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SwapBuffersCompleteParams.prototype.initDefaults_ = function() {
  };
  SwapBuffersCompleteParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SwapBuffersCompleteParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SwapBuffersCompleteParams.encodedSize = codec.kStructHeaderSize + 0;

  SwapBuffersCompleteParams.decode = function(decoder) {
    var packed;
    var val = new SwapBuffersCompleteParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SwapBuffersCompleteParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SwapBuffersCompleteParams.encodedSize);
    encoder.writeUint32(0);
  };
  function DeferredRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DeferredRequest.prototype.initDefaults_ = function() {
    this.params = null;
    this.syncTokenFences = null;
    this.releaseCount = 0;
  };
  DeferredRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DeferredRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DeferredRequest.params
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, DeferredRequestParams, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DeferredRequest.syncTokenFences
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(sync_token$.SyncToken), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  DeferredRequest.encodedSize = codec.kStructHeaderSize + 32;

  DeferredRequest.decode = function(decoder) {
    var packed;
    var val = new DeferredRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStruct(DeferredRequestParams);
    val.syncTokenFences =
        decoder.decodeArrayPointer(new codec.PointerTo(sync_token$.SyncToken));
    val.releaseCount =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  DeferredRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DeferredRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(DeferredRequestParams, val.params);
    encoder.encodeArrayPointer(new codec.PointerTo(sync_token$.SyncToken), val.syncTokenFences);
    encoder.encodeStruct(codec.Uint64, val.releaseCount);
  };
  function DeferredCommandBufferRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DeferredCommandBufferRequest.prototype.initDefaults_ = function() {
    this.routingId = 0;
    this.params = null;
  };
  DeferredCommandBufferRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DeferredCommandBufferRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DeferredCommandBufferRequest.params
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, DeferredCommandBufferRequestParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DeferredCommandBufferRequest.encodedSize = codec.kStructHeaderSize + 24;

  DeferredCommandBufferRequest.decode = function(decoder) {
    var packed;
    var val = new DeferredCommandBufferRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routingId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.params =
        decoder.decodeStruct(DeferredCommandBufferRequestParams);
    return val;
  };

  DeferredCommandBufferRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DeferredCommandBufferRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(DeferredCommandBufferRequestParams, val.params);
  };
  function AsyncFlushParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AsyncFlushParams.prototype.initDefaults_ = function() {
    this.putOffset = 0;
    this.flushId = 0;
    this.syncTokenFences = null;
  };
  AsyncFlushParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AsyncFlushParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    // validate AsyncFlushParams.syncTokenFences
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(sync_token$.SyncToken), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AsyncFlushParams.encodedSize = codec.kStructHeaderSize + 16;

  AsyncFlushParams.decode = function(decoder) {
    var packed;
    var val = new AsyncFlushParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.putOffset =
        decoder.decodeStruct(codec.Int32);
    val.flushId =
        decoder.decodeStruct(codec.Uint32);
    val.syncTokenFences =
        decoder.decodeArrayPointer(new codec.PointerTo(sync_token$.SyncToken));
    return val;
  };

  AsyncFlushParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AsyncFlushParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.putOffset);
    encoder.encodeStruct(codec.Uint32, val.flushId);
    encoder.encodeArrayPointer(new codec.PointerTo(sync_token$.SyncToken), val.syncTokenFences);
  };
  function SharedImageInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedImageInfo.prototype.initDefaults_ = function() {
    this.meta = null;
    this.debugLabel = null;
  };
  SharedImageInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedImageInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedImageInfo.meta
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_image_metadata$.SharedImageMetadata, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedImageInfo.debugLabel
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharedImageInfo.encodedSize = codec.kStructHeaderSize + 16;

  SharedImageInfo.decode = function(decoder) {
    var packed;
    var val = new SharedImageInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.meta =
        decoder.decodeStructPointer(shared_image_metadata$.SharedImageMetadata);
    val.debugLabel =
        decoder.decodeStruct(codec.String);
    return val;
  };

  SharedImageInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedImageInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_image_metadata$.SharedImageMetadata, val.meta);
    encoder.encodeStruct(codec.String, val.debugLabel);
  };
  function CreateSharedImageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CreateSharedImageParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
    this.siInfo = null;
    this.poolId = null;
  };
  CreateSharedImageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CreateSharedImageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageParams.siInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, SharedImageInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageParams.poolId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, shared_image_pool_id$.SharedImagePoolId, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CreateSharedImageParams.encodedSize = codec.kStructHeaderSize + 24;

  CreateSharedImageParams.decode = function(decoder) {
    var packed;
    var val = new CreateSharedImageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    val.siInfo =
        decoder.decodeStructPointer(SharedImageInfo);
    val.poolId =
        decoder.decodeStructPointer(shared_image_pool_id$.SharedImagePoolId);
    return val;
  };

  CreateSharedImageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CreateSharedImageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeStructPointer(SharedImageInfo, val.siInfo);
    encoder.encodeStructPointer(shared_image_pool_id$.SharedImagePoolId, val.poolId);
  };
  function CreateSharedImageWithDataParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CreateSharedImageWithDataParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
    this.siInfo = null;
    this.pixelDataOffset = 0;
    this.pixelDataSize = 0;
    this.doneWithShm = false;
  };
  CreateSharedImageWithDataParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CreateSharedImageWithDataParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageWithDataParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageWithDataParams.siInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, SharedImageInfo, false);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  CreateSharedImageWithDataParams.encodedSize = codec.kStructHeaderSize + 32;

  CreateSharedImageWithDataParams.decode = function(decoder) {
    var packed;
    var val = new CreateSharedImageWithDataParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    val.siInfo =
        decoder.decodeStructPointer(SharedImageInfo);
    val.pixelDataOffset =
        decoder.decodeStruct(codec.Uint32);
    val.pixelDataSize =
        decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.doneWithShm = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CreateSharedImageWithDataParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CreateSharedImageWithDataParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeStructPointer(SharedImageInfo, val.siInfo);
    encoder.encodeStruct(codec.Uint32, val.pixelDataOffset);
    encoder.encodeStruct(codec.Uint32, val.pixelDataSize);
    packed = 0;
    packed |= (val.doneWithShm & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CreateSharedImageWithBufferParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CreateSharedImageWithBufferParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
    this.siInfo = null;
    this.bufferHandle = null;
    this.poolId = null;
  };
  CreateSharedImageWithBufferParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CreateSharedImageWithBufferParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageWithBufferParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageWithBufferParams.siInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, SharedImageInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageWithBufferParams.bufferHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, buffer_types$.GpuMemoryBufferHandle, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImageWithBufferParams.poolId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, shared_image_pool_id$.SharedImagePoolId, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CreateSharedImageWithBufferParams.encodedSize = codec.kStructHeaderSize + 32;

  CreateSharedImageWithBufferParams.decode = function(decoder) {
    var packed;
    var val = new CreateSharedImageWithBufferParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    val.siInfo =
        decoder.decodeStructPointer(SharedImageInfo);
    val.bufferHandle =
        decoder.decodeStructPointer(buffer_types$.GpuMemoryBufferHandle);
    val.poolId =
        decoder.decodeStructPointer(shared_image_pool_id$.SharedImagePoolId);
    return val;
  };

  CreateSharedImageWithBufferParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CreateSharedImageWithBufferParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeStructPointer(SharedImageInfo, val.siInfo);
    encoder.encodeStructPointer(buffer_types$.GpuMemoryBufferHandle, val.bufferHandle);
    encoder.encodeStructPointer(shared_image_pool_id$.SharedImagePoolId, val.poolId);
  };
  function UpdateSharedImageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UpdateSharedImageParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
    this.inFenceHandle = null;
  };
  UpdateSharedImageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UpdateSharedImageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UpdateSharedImageParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UpdateSharedImageParams.inFenceHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, gpu_fence_handle$.GpuFenceHandle, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UpdateSharedImageParams.encodedSize = codec.kStructHeaderSize + 16;

  UpdateSharedImageParams.decode = function(decoder) {
    var packed;
    var val = new UpdateSharedImageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    val.inFenceHandle =
        decoder.decodeStructPointer(gpu_fence_handle$.GpuFenceHandle);
    return val;
  };

  UpdateSharedImageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UpdateSharedImageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeStructPointer(gpu_fence_handle$.GpuFenceHandle, val.inFenceHandle);
  };
  function AddReferenceToSharedImageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AddReferenceToSharedImageParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
  };
  AddReferenceToSharedImageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AddReferenceToSharedImageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AddReferenceToSharedImageParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AddReferenceToSharedImageParams.encodedSize = codec.kStructHeaderSize + 8;

  AddReferenceToSharedImageParams.decode = function(decoder) {
    var packed;
    var val = new AddReferenceToSharedImageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    return val;
  };

  AddReferenceToSharedImageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AddReferenceToSharedImageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
  };
  function CopyToGpuMemoryBufferParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CopyToGpuMemoryBufferParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
  };
  CopyToGpuMemoryBufferParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CopyToGpuMemoryBufferParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CopyToGpuMemoryBufferParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CopyToGpuMemoryBufferParams.encodedSize = codec.kStructHeaderSize + 8;

  CopyToGpuMemoryBufferParams.decode = function(decoder) {
    var packed;
    var val = new CopyToGpuMemoryBufferParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    return val;
  };

  CopyToGpuMemoryBufferParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CopyToGpuMemoryBufferParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
  };
  function RegisterDxgiFenceParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RegisterDxgiFenceParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
    this.dxgiToken = null;
    this.fenceHandle = null;
  };
  RegisterDxgiFenceParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RegisterDxgiFenceParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RegisterDxgiFenceParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RegisterDxgiFenceParams.dxgiToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, native_handle_types$.DXGIHandleToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RegisterDxgiFenceParams.fenceHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, gpu_fence_handle$.GpuFenceHandle, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RegisterDxgiFenceParams.encodedSize = codec.kStructHeaderSize + 24;

  RegisterDxgiFenceParams.decode = function(decoder) {
    var packed;
    var val = new RegisterDxgiFenceParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    val.dxgiToken =
        decoder.decodeStructPointer(native_handle_types$.DXGIHandleToken);
    val.fenceHandle =
        decoder.decodeStructPointer(gpu_fence_handle$.GpuFenceHandle);
    return val;
  };

  RegisterDxgiFenceParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RegisterDxgiFenceParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeStructPointer(native_handle_types$.DXGIHandleToken, val.dxgiToken);
    encoder.encodeStructPointer(gpu_fence_handle$.GpuFenceHandle, val.fenceHandle);
  };
  function UpdateDxgiFenceParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UpdateDxgiFenceParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
    this.dxgiToken = null;
    this.fenceValue = 0;
  };
  UpdateDxgiFenceParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UpdateDxgiFenceParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UpdateDxgiFenceParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UpdateDxgiFenceParams.dxgiToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, native_handle_types$.DXGIHandleToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  UpdateDxgiFenceParams.encodedSize = codec.kStructHeaderSize + 24;

  UpdateDxgiFenceParams.decode = function(decoder) {
    var packed;
    var val = new UpdateDxgiFenceParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    val.dxgiToken =
        decoder.decodeStructPointer(native_handle_types$.DXGIHandleToken);
    val.fenceValue =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  UpdateDxgiFenceParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UpdateDxgiFenceParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeStructPointer(native_handle_types$.DXGIHandleToken, val.dxgiToken);
    encoder.encodeStruct(codec.Uint64, val.fenceValue);
  };
  function UnregisterDxgiFenceParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UnregisterDxgiFenceParams.prototype.initDefaults_ = function() {
    this.mailbox = null;
    this.dxgiToken = null;
  };
  UnregisterDxgiFenceParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UnregisterDxgiFenceParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UnregisterDxgiFenceParams.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UnregisterDxgiFenceParams.dxgiToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, native_handle_types$.DXGIHandleToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UnregisterDxgiFenceParams.encodedSize = codec.kStructHeaderSize + 16;

  UnregisterDxgiFenceParams.decode = function(decoder) {
    var packed;
    var val = new UnregisterDxgiFenceParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    val.dxgiToken =
        decoder.decodeStructPointer(native_handle_types$.DXGIHandleToken);
    return val;
  };

  UnregisterDxgiFenceParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UnregisterDxgiFenceParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeStructPointer(native_handle_types$.DXGIHandleToken, val.dxgiToken);
  };
  function CreateSharedImagePoolParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CreateSharedImagePoolParams.prototype.initDefaults_ = function() {
    this.poolId = null;
    this.clientRemote = new shared_image_pool_client_interface$.SharedImagePoolClientInterfacePtr();
  };
  CreateSharedImagePoolParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CreateSharedImagePoolParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImagePoolParams.poolId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_image_pool_id$.SharedImagePoolId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CreateSharedImagePoolParams.clientRemote
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CreateSharedImagePoolParams.encodedSize = codec.kStructHeaderSize + 16;

  CreateSharedImagePoolParams.decode = function(decoder) {
    var packed;
    var val = new CreateSharedImagePoolParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.poolId =
        decoder.decodeStructPointer(shared_image_pool_id$.SharedImagePoolId);
    val.clientRemote =
        decoder.decodeStruct(new codec.Interface(shared_image_pool_client_interface$.SharedImagePoolClientInterfacePtr));
    return val;
  };

  CreateSharedImagePoolParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CreateSharedImagePoolParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_image_pool_id$.SharedImagePoolId, val.poolId);
    encoder.encodeStruct(new codec.Interface(shared_image_pool_client_interface$.SharedImagePoolClientInterfacePtr), val.clientRemote);
  };
  function DestroySharedImagePoolParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DestroySharedImagePoolParams.prototype.initDefaults_ = function() {
    this.poolId = null;
  };
  DestroySharedImagePoolParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DestroySharedImagePoolParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DestroySharedImagePoolParams.poolId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_image_pool_id$.SharedImagePoolId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DestroySharedImagePoolParams.encodedSize = codec.kStructHeaderSize + 8;

  DestroySharedImagePoolParams.decode = function(decoder) {
    var packed;
    var val = new DestroySharedImagePoolParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.poolId =
        decoder.decodeStructPointer(shared_image_pool_id$.SharedImagePoolId);
    return val;
  };

  DestroySharedImagePoolParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DestroySharedImagePoolParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_image_pool_id$.SharedImagePoolId, val.poolId);
  };
  function GpuChannel_CrashForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CrashForTesting_Params.prototype.initDefaults_ = function() {
  };
  GpuChannel_CrashForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CrashForTesting_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_CrashForTesting_Params.encodedSize = codec.kStructHeaderSize + 0;

  GpuChannel_CrashForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CrashForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  GpuChannel_CrashForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CrashForTesting_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function GpuChannel_TerminateForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_TerminateForTesting_Params.prototype.initDefaults_ = function() {
  };
  GpuChannel_TerminateForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_TerminateForTesting_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_TerminateForTesting_Params.encodedSize = codec.kStructHeaderSize + 0;

  GpuChannel_TerminateForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_TerminateForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  GpuChannel_TerminateForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_TerminateForTesting_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function GpuChannel_GetChannelToken_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_GetChannelToken_Params.prototype.initDefaults_ = function() {
  };
  GpuChannel_GetChannelToken_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_GetChannelToken_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_GetChannelToken_Params.encodedSize = codec.kStructHeaderSize + 0;

  GpuChannel_GetChannelToken_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_GetChannelToken_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  GpuChannel_GetChannelToken_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_GetChannelToken_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function GpuChannel_GetChannelToken_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_GetChannelToken_ResponseParams.prototype.initDefaults_ = function() {
    this.token = null;
  };
  GpuChannel_GetChannelToken_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_GetChannelToken_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_GetChannelToken_ResponseParams.token
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_GetChannelToken_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_GetChannelToken_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_GetChannelToken_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  GpuChannel_GetChannelToken_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_GetChannelToken_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.token);
  };
  function GpuChannel_GetGPUInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_GetGPUInfo_Params.prototype.initDefaults_ = function() {
  };
  GpuChannel_GetGPUInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_GetGPUInfo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_GetGPUInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  GpuChannel_GetGPUInfo_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_GetGPUInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  GpuChannel_GetGPUInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_GetGPUInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function GpuChannel_GetGPUInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_GetGPUInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.gpuInfo = null;
    this.gpuFeatureInfo = null;
    this.sharedImageCapabilities = null;
  };
  GpuChannel_GetGPUInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_GetGPUInfo_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_GetGPUInfo_ResponseParams.gpuInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, gpu_info$.GpuInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_GetGPUInfo_ResponseParams.gpuFeatureInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, gpu_feature_info$.GpuFeatureInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_GetGPUInfo_ResponseParams.sharedImageCapabilities
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, shared_image_capabilities$.SharedImageCapabilities, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_GetGPUInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  GpuChannel_GetGPUInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_GetGPUInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gpuInfo =
        decoder.decodeStructPointer(gpu_info$.GpuInfo);
    val.gpuFeatureInfo =
        decoder.decodeStructPointer(gpu_feature_info$.GpuFeatureInfo);
    val.sharedImageCapabilities =
        decoder.decodeStructPointer(shared_image_capabilities$.SharedImageCapabilities);
    return val;
  };

  GpuChannel_GetGPUInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_GetGPUInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(gpu_info$.GpuInfo, val.gpuInfo);
    encoder.encodeStructPointer(gpu_feature_info$.GpuFeatureInfo, val.gpuFeatureInfo);
    encoder.encodeStructPointer(shared_image_capabilities$.SharedImageCapabilities, val.sharedImageCapabilities);
  };
  function GpuChannel_Flush_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_Flush_Params.prototype.initDefaults_ = function() {
  };
  GpuChannel_Flush_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_Flush_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_Flush_Params.encodedSize = codec.kStructHeaderSize + 0;

  GpuChannel_Flush_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_Flush_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  GpuChannel_Flush_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_Flush_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function GpuChannel_Flush_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_Flush_ResponseParams.prototype.initDefaults_ = function() {
  };
  GpuChannel_Flush_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_Flush_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_Flush_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  GpuChannel_Flush_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_Flush_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  GpuChannel_Flush_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_Flush_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function GpuChannel_GetSharedMemoryForFlushId_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_GetSharedMemoryForFlushId_Params.prototype.initDefaults_ = function() {
  };
  GpuChannel_GetSharedMemoryForFlushId_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_GetSharedMemoryForFlushId_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_GetSharedMemoryForFlushId_Params.encodedSize = codec.kStructHeaderSize + 0;

  GpuChannel_GetSharedMemoryForFlushId_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_GetSharedMemoryForFlushId_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  GpuChannel_GetSharedMemoryForFlushId_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_GetSharedMemoryForFlushId_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function GpuChannel_GetSharedMemoryForFlushId_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_GetSharedMemoryForFlushId_ResponseParams.prototype.initDefaults_ = function() {
    this.versionBuffer = null;
  };
  GpuChannel_GetSharedMemoryForFlushId_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_GetSharedMemoryForFlushId_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_GetSharedMemoryForFlushId_ResponseParams.versionBuffer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_memory$.ReadOnlySharedMemoryRegion, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_GetSharedMemoryForFlushId_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_GetSharedMemoryForFlushId_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_GetSharedMemoryForFlushId_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.versionBuffer =
        decoder.decodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion);
    return val;
  };

  GpuChannel_GetSharedMemoryForFlushId_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_GetSharedMemoryForFlushId_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion, val.versionBuffer);
  };
  function GpuChannel_CreateCommandBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CreateCommandBuffer_Params.prototype.initDefaults_ = function() {
    this.params = null;
    this.routingId = 0;
    this.receiver = new associatedBindings.AssociatedInterfaceRequest();
    this.sharedState = null;
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  GpuChannel_CreateCommandBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CreateCommandBuffer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateCommandBuffer_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CreateCommandBufferParams, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate GpuChannel_CreateCommandBuffer_Params.sharedState
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, shared_memory$.UnsafeSharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateCommandBuffer_Params.receiver
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateCommandBuffer_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 24, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_CreateCommandBuffer_Params.encodedSize = codec.kStructHeaderSize + 32;

  GpuChannel_CreateCommandBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CreateCommandBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(CreateCommandBufferParams);
    val.routingId =
        decoder.decodeStruct(codec.Int32);
    val.receiver =
        decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    val.sharedState =
        decoder.decodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion);
    val.client =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  GpuChannel_CreateCommandBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CreateCommandBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CreateCommandBufferParams, val.params);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.receiver);
    encoder.encodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion, val.sharedState);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  function GpuChannel_CreateCommandBuffer_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CreateCommandBuffer_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
    this.capabilties = null;
    this.glCapabilities = null;
  };
  GpuChannel_CreateCommandBuffer_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CreateCommandBuffer_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateCommandBuffer_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, context_result$.ContextResult);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateCommandBuffer_ResponseParams.capabilties
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, capabilities$.Capabilities, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateCommandBuffer_ResponseParams.glCapabilities
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, capabilities$.GLCapabilities, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_CreateCommandBuffer_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  GpuChannel_CreateCommandBuffer_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CreateCommandBuffer_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(new codec.Enum(context_result$.ContextResult));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.capabilties =
        decoder.decodeStructPointer(capabilities$.Capabilities);
    val.glCapabilities =
        decoder.decodeStructPointer(capabilities$.GLCapabilities);
    return val;
  };

  GpuChannel_CreateCommandBuffer_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CreateCommandBuffer_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(capabilities$.Capabilities, val.capabilties);
    encoder.encodeStructPointer(capabilities$.GLCapabilities, val.glCapabilities);
  };
  function GpuChannel_DestroyCommandBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_DestroyCommandBuffer_Params.prototype.initDefaults_ = function() {
    this.routingId = 0;
  };
  GpuChannel_DestroyCommandBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_DestroyCommandBuffer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  GpuChannel_DestroyCommandBuffer_Params.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_DestroyCommandBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_DestroyCommandBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routingId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuChannel_DestroyCommandBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_DestroyCommandBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GpuChannel_DestroyCommandBuffer_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_DestroyCommandBuffer_ResponseParams.prototype.initDefaults_ = function() {
  };
  GpuChannel_DestroyCommandBuffer_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_DestroyCommandBuffer_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_DestroyCommandBuffer_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  GpuChannel_DestroyCommandBuffer_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_DestroyCommandBuffer_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  GpuChannel_DestroyCommandBuffer_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_DestroyCommandBuffer_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function GpuChannel_FlushDeferredRequests_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_FlushDeferredRequests_Params.prototype.initDefaults_ = function() {
    this.requests = null;
    this.flushedDeferredMessageId = 0;
  };
  GpuChannel_FlushDeferredRequests_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_FlushDeferredRequests_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_FlushDeferredRequests_Params.requests
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(DeferredRequest), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  GpuChannel_FlushDeferredRequests_Params.encodedSize = codec.kStructHeaderSize + 16;

  GpuChannel_FlushDeferredRequests_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_FlushDeferredRequests_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requests =
        decoder.decodeArrayPointer(new codec.PointerTo(DeferredRequest));
    val.flushedDeferredMessageId =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuChannel_FlushDeferredRequests_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_FlushDeferredRequests_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(DeferredRequest), val.requests);
    encoder.encodeStruct(codec.Uint32, val.flushedDeferredMessageId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GpuChannel_CreateGpuMemoryBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CreateGpuMemoryBuffer_Params.prototype.initDefaults_ = function() {
    this.size = null;
    this.format = null;
    this.bufferUsage = 0;
  };
  GpuChannel_CreateGpuMemoryBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CreateGpuMemoryBuffer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateGpuMemoryBuffer_Params.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateGpuMemoryBuffer_Params.format
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, shared_image_format$.SharedImageFormat, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateGpuMemoryBuffer_Params.bufferUsage
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, buffer_types$.BufferUsage);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_CreateGpuMemoryBuffer_Params.encodedSize = codec.kStructHeaderSize + 32;

  GpuChannel_CreateGpuMemoryBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CreateGpuMemoryBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size =
        decoder.decodeStructPointer(geometry$.Size);
    val.format =
        decoder.decodeStruct(shared_image_format$.SharedImageFormat);
    val.bufferUsage =
        decoder.decodeStruct(new codec.Enum(buffer_types$.BufferUsage));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuChannel_CreateGpuMemoryBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CreateGpuMemoryBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
    encoder.encodeStruct(shared_image_format$.SharedImageFormat, val.format);
    encoder.encodeStruct(codec.Int32, val.bufferUsage);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GpuChannel_CreateGpuMemoryBuffer_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CreateGpuMemoryBuffer_ResponseParams.prototype.initDefaults_ = function() {
    this.bufferHandle = null;
  };
  GpuChannel_CreateGpuMemoryBuffer_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CreateGpuMemoryBuffer_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CreateGpuMemoryBuffer_ResponseParams.bufferHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, buffer_types$.GpuMemoryBufferHandle, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_CreateGpuMemoryBuffer_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_CreateGpuMemoryBuffer_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CreateGpuMemoryBuffer_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bufferHandle =
        decoder.decodeStructPointer(buffer_types$.GpuMemoryBufferHandle);
    return val;
  };

  GpuChannel_CreateGpuMemoryBuffer_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CreateGpuMemoryBuffer_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(buffer_types$.GpuMemoryBufferHandle, val.bufferHandle);
  };
  function GpuChannel_CreateDCOMPTexture_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CreateDCOMPTexture_Params.prototype.initDefaults_ = function() {
    this.routeId = 0;
    this.receiver = new associatedBindings.AssociatedInterfaceRequest();
  };
  GpuChannel_CreateDCOMPTexture_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CreateDCOMPTexture_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate GpuChannel_CreateDCOMPTexture_Params.receiver
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_CreateDCOMPTexture_Params.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_CreateDCOMPTexture_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CreateDCOMPTexture_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routeId =
        decoder.decodeStruct(codec.Int32);
    val.receiver =
        decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    return val;
  };

  GpuChannel_CreateDCOMPTexture_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CreateDCOMPTexture_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.routeId);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.receiver);
  };
  function GpuChannel_CreateDCOMPTexture_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CreateDCOMPTexture_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  GpuChannel_CreateDCOMPTexture_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CreateDCOMPTexture_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  GpuChannel_CreateDCOMPTexture_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_CreateDCOMPTexture_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CreateDCOMPTexture_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuChannel_CreateDCOMPTexture_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CreateDCOMPTexture_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GpuChannel_WaitForTokenInRange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_WaitForTokenInRange_Params.prototype.initDefaults_ = function() {
    this.routingId = 0;
    this.start = 0;
    this.end = 0;
  };
  GpuChannel_WaitForTokenInRange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_WaitForTokenInRange_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  GpuChannel_WaitForTokenInRange_Params.encodedSize = codec.kStructHeaderSize + 16;

  GpuChannel_WaitForTokenInRange_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_WaitForTokenInRange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routingId =
        decoder.decodeStruct(codec.Int32);
    val.start =
        decoder.decodeStruct(codec.Int32);
    val.end =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuChannel_WaitForTokenInRange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_WaitForTokenInRange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeStruct(codec.Int32, val.start);
    encoder.encodeStruct(codec.Int32, val.end);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GpuChannel_WaitForTokenInRange_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_WaitForTokenInRange_ResponseParams.prototype.initDefaults_ = function() {
    this.state = null;
  };
  GpuChannel_WaitForTokenInRange_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_WaitForTokenInRange_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_WaitForTokenInRange_ResponseParams.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CommandBufferState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_WaitForTokenInRange_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_WaitForTokenInRange_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_WaitForTokenInRange_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state =
        decoder.decodeStructPointer(CommandBufferState);
    return val;
  };

  GpuChannel_WaitForTokenInRange_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_WaitForTokenInRange_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CommandBufferState, val.state);
  };
  function GpuChannel_WaitForGetOffsetInRange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_WaitForGetOffsetInRange_Params.prototype.initDefaults_ = function() {
    this.routingId = 0;
    this.setGetBufferCount = 0;
    this.start = 0;
    this.end = 0;
  };
  GpuChannel_WaitForGetOffsetInRange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_WaitForGetOffsetInRange_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  GpuChannel_WaitForGetOffsetInRange_Params.encodedSize = codec.kStructHeaderSize + 16;

  GpuChannel_WaitForGetOffsetInRange_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_WaitForGetOffsetInRange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routingId =
        decoder.decodeStruct(codec.Int32);
    val.setGetBufferCount =
        decoder.decodeStruct(codec.Uint32);
    val.start =
        decoder.decodeStruct(codec.Int32);
    val.end =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  GpuChannel_WaitForGetOffsetInRange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_WaitForGetOffsetInRange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeStruct(codec.Uint32, val.setGetBufferCount);
    encoder.encodeStruct(codec.Int32, val.start);
    encoder.encodeStruct(codec.Int32, val.end);
  };
  function GpuChannel_WaitForGetOffsetInRange_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_WaitForGetOffsetInRange_ResponseParams.prototype.initDefaults_ = function() {
    this.state = null;
  };
  GpuChannel_WaitForGetOffsetInRange_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_WaitForGetOffsetInRange_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_WaitForGetOffsetInRange_ResponseParams.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CommandBufferState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_WaitForGetOffsetInRange_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_WaitForGetOffsetInRange_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_WaitForGetOffsetInRange_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state =
        decoder.decodeStructPointer(CommandBufferState);
    return val;
  };

  GpuChannel_WaitForGetOffsetInRange_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_WaitForGetOffsetInRange_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CommandBufferState, val.state);
  };
  function GpuChannel_CopyToGpuMemoryBufferAsync_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CopyToGpuMemoryBufferAsync_Params.prototype.initDefaults_ = function() {
    this.mailbox = null;
    this.syncTokenDependencies = null;
    this.releaseCount = 0;
  };
  GpuChannel_CopyToGpuMemoryBufferAsync_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CopyToGpuMemoryBufferAsync_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CopyToGpuMemoryBufferAsync_Params.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CopyToGpuMemoryBufferAsync_Params.syncTokenDependencies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(sync_token$.SyncToken), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  GpuChannel_CopyToGpuMemoryBufferAsync_Params.encodedSize = codec.kStructHeaderSize + 24;

  GpuChannel_CopyToGpuMemoryBufferAsync_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CopyToGpuMemoryBufferAsync_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    val.syncTokenDependencies =
        decoder.decodeArrayPointer(new codec.PointerTo(sync_token$.SyncToken));
    val.releaseCount =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  GpuChannel_CopyToGpuMemoryBufferAsync_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CopyToGpuMemoryBufferAsync_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
    encoder.encodeArrayPointer(new codec.PointerTo(sync_token$.SyncToken), val.syncTokenDependencies);
    encoder.encodeStruct(codec.Uint64, val.releaseCount);
  };
  function GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.prototype.initDefaults_ = function() {
    this.bufferHandle = null;
    this.sharedMemory = null;
  };
  GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.bufferHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, buffer_types$.GpuMemoryBufferHandle, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.sharedMemory
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, shared_memory$.UnsafeSharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.encodedSize = codec.kStructHeaderSize + 16;

  GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bufferHandle =
        decoder.decodeStructPointer(buffer_types$.GpuMemoryBufferHandle);
    val.sharedMemory =
        decoder.decodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion);
    return val;
  };

  GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(buffer_types$.GpuMemoryBufferHandle, val.bufferHandle);
    encoder.encodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion, val.sharedMemory);
  };
  function GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CommandBuffer_SetGetBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_SetGetBuffer_Params.prototype.initDefaults_ = function() {
    this.shmId = 0;
  };
  CommandBuffer_SetGetBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_SetGetBuffer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_SetGetBuffer_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_SetGetBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_SetGetBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.shmId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_SetGetBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_SetGetBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.shmId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CommandBuffer_RegisterTransferBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_RegisterTransferBuffer_Params.prototype.initDefaults_ = function() {
    this.id = 0;
    this.buffer = null;
  };
  CommandBuffer_RegisterTransferBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_RegisterTransferBuffer_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CommandBuffer_RegisterTransferBuffer_Params.buffer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, shared_memory$.UnsafeSharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBuffer_RegisterTransferBuffer_Params.encodedSize = codec.kStructHeaderSize + 16;

  CommandBuffer_RegisterTransferBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_RegisterTransferBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.buffer =
        decoder.decodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion);
    return val;
  };

  CommandBuffer_RegisterTransferBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_RegisterTransferBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion, val.buffer);
  };
  function CommandBuffer_CreateGpuFenceFromHandle_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_CreateGpuFenceFromHandle_Params.prototype.initDefaults_ = function() {
    this.gpuFenceId = 0;
    this.fenceHandle = null;
  };
  CommandBuffer_CreateGpuFenceFromHandle_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_CreateGpuFenceFromHandle_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CommandBuffer_CreateGpuFenceFromHandle_Params.fenceHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, gpu_fence_handle$.GpuFenceHandle, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBuffer_CreateGpuFenceFromHandle_Params.encodedSize = codec.kStructHeaderSize + 16;

  CommandBuffer_CreateGpuFenceFromHandle_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_CreateGpuFenceFromHandle_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gpuFenceId =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.fenceHandle =
        decoder.decodeStructPointer(gpu_fence_handle$.GpuFenceHandle);
    return val;
  };

  CommandBuffer_CreateGpuFenceFromHandle_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_CreateGpuFenceFromHandle_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.gpuFenceId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(gpu_fence_handle$.GpuFenceHandle, val.fenceHandle);
  };
  function CommandBuffer_GetGpuFenceHandle_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_GetGpuFenceHandle_Params.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  CommandBuffer_GetGpuFenceHandle_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_GetGpuFenceHandle_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_GetGpuFenceHandle_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_GetGpuFenceHandle_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_GetGpuFenceHandle_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_GetGpuFenceHandle_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_GetGpuFenceHandle_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CommandBuffer_GetGpuFenceHandle_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_GetGpuFenceHandle_ResponseParams.prototype.initDefaults_ = function() {
    this.fenceHandle = null;
  };
  CommandBuffer_GetGpuFenceHandle_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_GetGpuFenceHandle_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommandBuffer_GetGpuFenceHandle_ResponseParams.fenceHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, gpu_fence_handle$.GpuFenceHandle, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBuffer_GetGpuFenceHandle_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_GetGpuFenceHandle_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_GetGpuFenceHandle_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fenceHandle =
        decoder.decodeStructPointer(gpu_fence_handle$.GpuFenceHandle);
    return val;
  };

  CommandBuffer_GetGpuFenceHandle_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_GetGpuFenceHandle_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(gpu_fence_handle$.GpuFenceHandle, val.fenceHandle);
  };
  function CommandBuffer_SignalSyncToken_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_SignalSyncToken_Params.prototype.initDefaults_ = function() {
    this.syncToken = null;
    this.signalId = 0;
  };
  CommandBuffer_SignalSyncToken_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_SignalSyncToken_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommandBuffer_SignalSyncToken_Params.syncToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, sync_token$.SyncToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CommandBuffer_SignalSyncToken_Params.encodedSize = codec.kStructHeaderSize + 16;

  CommandBuffer_SignalSyncToken_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_SignalSyncToken_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.syncToken =
        decoder.decodeStructPointer(sync_token$.SyncToken);
    val.signalId =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CommandBuffer_SignalSyncToken_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_SignalSyncToken_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(sync_token$.SyncToken, val.syncToken);
    encoder.encodeStruct(codec.Uint32, val.signalId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CommandBuffer_SignalQuery_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBuffer_SignalQuery_Params.prototype.initDefaults_ = function() {
    this.query = 0;
    this.signalId = 0;
  };
  CommandBuffer_SignalQuery_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBuffer_SignalQuery_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  CommandBuffer_SignalQuery_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBuffer_SignalQuery_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBuffer_SignalQuery_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.query =
        decoder.decodeStruct(codec.Uint32);
    val.signalId =
        decoder.decodeStruct(codec.Uint32);
    return val;
  };

  CommandBuffer_SignalQuery_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBuffer_SignalQuery_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.query);
    encoder.encodeStruct(codec.Uint32, val.signalId);
  };
  function CommandBufferClient_OnConsoleMessage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferClient_OnConsoleMessage_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  CommandBufferClient_OnConsoleMessage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferClient_OnConsoleMessage_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommandBufferClient_OnConsoleMessage_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBufferClient_OnConsoleMessage_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBufferClient_OnConsoleMessage_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferClient_OnConsoleMessage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message =
        decoder.decodeStruct(codec.String);
    return val;
  };

  CommandBufferClient_OnConsoleMessage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferClient_OnConsoleMessage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.message);
  };
  function CommandBufferClient_OnGpuSwitched_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferClient_OnGpuSwitched_Params.prototype.initDefaults_ = function() {
  };
  CommandBufferClient_OnGpuSwitched_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferClient_OnGpuSwitched_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBufferClient_OnGpuSwitched_Params.encodedSize = codec.kStructHeaderSize + 0;

  CommandBufferClient_OnGpuSwitched_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferClient_OnGpuSwitched_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CommandBufferClient_OnGpuSwitched_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferClient_OnGpuSwitched_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function CommandBufferClient_OnDestroyed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferClient_OnDestroyed_Params.prototype.initDefaults_ = function() {
    this.reason = 0;
    this.error = 0;
  };
  CommandBufferClient_OnDestroyed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferClient_OnDestroyed_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommandBufferClient_OnDestroyed_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, constants$.ContextLostReason);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommandBufferClient_OnDestroyed_Params.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, constants$.Error);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBufferClient_OnDestroyed_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBufferClient_OnDestroyed_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferClient_OnDestroyed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reason =
        decoder.decodeStruct(new codec.Enum(constants$.ContextLostReason));
    val.error =
        decoder.decodeStruct(new codec.Enum(constants$.Error));
    return val;
  };

  CommandBufferClient_OnDestroyed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferClient_OnDestroyed_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.encodeStruct(codec.Int32, val.error);
  };
  function CommandBufferClient_OnReturnData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferClient_OnReturnData_Params.prototype.initDefaults_ = function() {
    this.data = null;
  };
  CommandBufferClient_OnReturnData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferClient_OnReturnData_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CommandBufferClient_OnReturnData_Params.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBufferClient_OnReturnData_Params.encodedSize = codec.kStructHeaderSize + 8;

  CommandBufferClient_OnReturnData_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferClient_OnReturnData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  CommandBufferClient_OnReturnData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferClient_OnReturnData_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };
  function CommandBufferClient_OnSignalAck_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CommandBufferClient_OnSignalAck_Params.prototype.initDefaults_ = function() {
    this.signalId = 0;
    this.state = null;
  };
  CommandBufferClient_OnSignalAck_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CommandBufferClient_OnSignalAck_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CommandBufferClient_OnSignalAck_Params.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, CommandBufferState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CommandBufferClient_OnSignalAck_Params.encodedSize = codec.kStructHeaderSize + 16;

  CommandBufferClient_OnSignalAck_Params.decode = function(decoder) {
    var packed;
    var val = new CommandBufferClient_OnSignalAck_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.signalId =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.state =
        decoder.decodeStructPointer(CommandBufferState);
    return val;
  };

  CommandBufferClient_OnSignalAck_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CommandBufferClient_OnSignalAck_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.signalId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(CommandBufferState, val.state);
  };
  function DCOMPTexture_StartListening_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DCOMPTexture_StartListening_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  DCOMPTexture_StartListening_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DCOMPTexture_StartListening_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DCOMPTexture_StartListening_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DCOMPTexture_StartListening_Params.encodedSize = codec.kStructHeaderSize + 8;

  DCOMPTexture_StartListening_Params.decode = function(decoder) {
    var packed;
    var val = new DCOMPTexture_StartListening_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  DCOMPTexture_StartListening_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DCOMPTexture_StartListening_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  function DCOMPTexture_SetTextureSize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DCOMPTexture_SetTextureSize_Params.prototype.initDefaults_ = function() {
    this.size = null;
  };
  DCOMPTexture_SetTextureSize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DCOMPTexture_SetTextureSize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DCOMPTexture_SetTextureSize_Params.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DCOMPTexture_SetTextureSize_Params.encodedSize = codec.kStructHeaderSize + 8;

  DCOMPTexture_SetTextureSize_Params.decode = function(decoder) {
    var packed;
    var val = new DCOMPTexture_SetTextureSize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size =
        decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  DCOMPTexture_SetTextureSize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DCOMPTexture_SetTextureSize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
  };
  function DCOMPTexture_SetDCOMPSurfaceHandle_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DCOMPTexture_SetDCOMPSurfaceHandle_Params.prototype.initDefaults_ = function() {
    this.token = null;
  };
  DCOMPTexture_SetDCOMPSurfaceHandle_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DCOMPTexture_SetDCOMPSurfaceHandle_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DCOMPTexture_SetDCOMPSurfaceHandle_Params.token
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DCOMPTexture_SetDCOMPSurfaceHandle_Params.encodedSize = codec.kStructHeaderSize + 8;

  DCOMPTexture_SetDCOMPSurfaceHandle_Params.decode = function(decoder) {
    var packed;
    var val = new DCOMPTexture_SetDCOMPSurfaceHandle_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  DCOMPTexture_SetDCOMPSurfaceHandle_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DCOMPTexture_SetDCOMPSurfaceHandle_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.token);
  };
  function DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DCOMPTextureClient_OnSharedImageMailboxBound_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DCOMPTextureClient_OnSharedImageMailboxBound_Params.prototype.initDefaults_ = function() {
    this.mailbox = null;
  };
  DCOMPTextureClient_OnSharedImageMailboxBound_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DCOMPTextureClient_OnSharedImageMailboxBound_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DCOMPTextureClient_OnSharedImageMailboxBound_Params.mailbox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DCOMPTextureClient_OnSharedImageMailboxBound_Params.encodedSize = codec.kStructHeaderSize + 8;

  DCOMPTextureClient_OnSharedImageMailboxBound_Params.decode = function(decoder) {
    var packed;
    var val = new DCOMPTextureClient_OnSharedImageMailboxBound_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailbox =
        decoder.decodeStructPointer(mailbox$.Mailbox);
    return val;
  };

  DCOMPTextureClient_OnSharedImageMailboxBound_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DCOMPTextureClient_OnSharedImageMailboxBound_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(mailbox$.Mailbox, val.mailbox);
  };
  function DCOMPTextureClient_OnOutputRectChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DCOMPTextureClient_OnOutputRectChange_Params.prototype.initDefaults_ = function() {
    this.outputRect = null;
  };
  DCOMPTextureClient_OnOutputRectChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DCOMPTextureClient_OnOutputRectChange_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DCOMPTextureClient_OnOutputRectChange_Params.outputRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DCOMPTextureClient_OnOutputRectChange_Params.encodedSize = codec.kStructHeaderSize + 8;

  DCOMPTextureClient_OnOutputRectChange_Params.decode = function(decoder) {
    var packed;
    var val = new DCOMPTextureClient_OnOutputRectChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.outputRect =
        decoder.decodeStructPointer(geometry$.Rect);
    return val;
  };

  DCOMPTextureClient_OnOutputRectChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DCOMPTextureClient_OnOutputRectChange_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Rect, val.outputRect);
  };

  function ContextCreationAttribs(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  ContextCreationAttribs.Tags = {
    gles: 0,
    raster: 1,
    webgpu: 2,
  };

  ContextCreationAttribs.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  ContextCreationAttribs.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "gles",
        "raster",
        "webgpu",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a ContextCreationAttribs member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(ContextCreationAttribs.prototype, "gles", {
    get: function() {
      if (this.$tag != ContextCreationAttribs.Tags.gles) {
        throw new ReferenceError(
            "ContextCreationAttribs.gles is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = ContextCreationAttribs.Tags.gles;
      this.$data = value;
    }
  });
  Object.defineProperty(ContextCreationAttribs.prototype, "raster", {
    get: function() {
      if (this.$tag != ContextCreationAttribs.Tags.raster) {
        throw new ReferenceError(
            "ContextCreationAttribs.raster is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = ContextCreationAttribs.Tags.raster;
      this.$data = value;
    }
  });
  Object.defineProperty(ContextCreationAttribs.prototype, "webgpu", {
    get: function() {
      if (this.$tag != ContextCreationAttribs.Tags.webgpu) {
        throw new ReferenceError(
            "ContextCreationAttribs.webgpu is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = ContextCreationAttribs.Tags.webgpu;
      this.$data = value;
    }
  });


    ContextCreationAttribs.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case ContextCreationAttribs.Tags.gles:
          encoder.encodeStructPointer(GLESCreationAttribs, val.gles);
          break;
        case ContextCreationAttribs.Tags.raster:
          encoder.encodeStructPointer(RasterCreationAttribs, val.raster);
          break;
        case ContextCreationAttribs.Tags.webgpu:
          encoder.encodeStructPointer(WebGPUCreationAttribs, val.webgpu);
          break;
      }
      encoder.align();
    };


    ContextCreationAttribs.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new ContextCreationAttribs();
      var tag = decoder.readUint32();
      switch (tag) {
        case ContextCreationAttribs.Tags.gles:
          result.gles = decoder.decodeStructPointer(GLESCreationAttribs);
          break;
        case ContextCreationAttribs.Tags.raster:
          result.raster = decoder.decodeStructPointer(RasterCreationAttribs);
          break;
        case ContextCreationAttribs.Tags.webgpu:
          result.webgpu = decoder.decodeStructPointer(WebGPUCreationAttribs);
          break;
      }
      decoder.align();

      return result;
    };


    ContextCreationAttribs.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case ContextCreationAttribs.Tags.gles:
          

    // validate ContextCreationAttribs.gles
    err = messageValidator.validateStructPointer(data_offset, GLESCreationAttribs, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case ContextCreationAttribs.Tags.raster:
          

    // validate ContextCreationAttribs.raster
    err = messageValidator.validateStructPointer(data_offset, RasterCreationAttribs, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case ContextCreationAttribs.Tags.webgpu:
          

    // validate ContextCreationAttribs.webgpu
    err = messageValidator.validateStructPointer(data_offset, WebGPUCreationAttribs, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  ContextCreationAttribs.encodedSize = 16;

  function DeferredRequestParams(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  DeferredRequestParams.Tags = {
    commandBufferRequest: 0,
    sharedImageRequest: 1,
    destroyDcompTexture: 2,
  };

  DeferredRequestParams.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  DeferredRequestParams.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "commandBufferRequest",
        "sharedImageRequest",
        "destroyDcompTexture",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a DeferredRequestParams member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(DeferredRequestParams.prototype, "commandBufferRequest", {
    get: function() {
      if (this.$tag != DeferredRequestParams.Tags.commandBufferRequest) {
        throw new ReferenceError(
            "DeferredRequestParams.commandBufferRequest is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredRequestParams.Tags.commandBufferRequest;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredRequestParams.prototype, "sharedImageRequest", {
    get: function() {
      if (this.$tag != DeferredRequestParams.Tags.sharedImageRequest) {
        throw new ReferenceError(
            "DeferredRequestParams.sharedImageRequest is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredRequestParams.Tags.sharedImageRequest;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredRequestParams.prototype, "destroyDcompTexture", {
    get: function() {
      if (this.$tag != DeferredRequestParams.Tags.destroyDcompTexture) {
        throw new ReferenceError(
            "DeferredRequestParams.destroyDcompTexture is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredRequestParams.Tags.destroyDcompTexture;
      this.$data = value;
    }
  });


    DeferredRequestParams.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case DeferredRequestParams.Tags.commandBufferRequest:
          encoder.encodeStructPointer(DeferredCommandBufferRequest, val.commandBufferRequest);
          break;
        case DeferredRequestParams.Tags.sharedImageRequest:
          encoder.encodeStructPointer(DeferredSharedImageRequest, val.sharedImageRequest);
          break;
        case DeferredRequestParams.Tags.destroyDcompTexture:
          encoder.encodeStruct(codec.Int32, val.destroyDcompTexture);
          break;
      }
      encoder.align();
    };


    DeferredRequestParams.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new DeferredRequestParams();
      var tag = decoder.readUint32();
      switch (tag) {
        case DeferredRequestParams.Tags.commandBufferRequest:
          result.commandBufferRequest = decoder.decodeStructPointer(DeferredCommandBufferRequest);
          break;
        case DeferredRequestParams.Tags.sharedImageRequest:
          result.sharedImageRequest = decoder.decodeStructPointer(DeferredSharedImageRequest);
          break;
        case DeferredRequestParams.Tags.destroyDcompTexture:
          result.destroyDcompTexture = decoder.decodeStruct(codec.Int32);
          break;
      }
      decoder.align();

      return result;
    };


    DeferredRequestParams.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case DeferredRequestParams.Tags.commandBufferRequest:
          

    // validate DeferredRequestParams.commandBufferRequest
    err = messageValidator.validateStructPointer(data_offset, DeferredCommandBufferRequest, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredRequestParams.Tags.sharedImageRequest:
          
    // validate DeferredRequestParams.sharedImageRequest
    err = messageValidator.validateNestedUnion(data_offset, DeferredSharedImageRequest, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredRequestParams.Tags.destroyDcompTexture:
          

          break;
      }

      return validator.validationError.NONE;
    };

  DeferredRequestParams.encodedSize = 16;

  function DeferredCommandBufferRequestParams(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  DeferredCommandBufferRequestParams.Tags = {
    asyncFlush: 0,
    destroyTransferBuffer: 1,
  };

  DeferredCommandBufferRequestParams.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  DeferredCommandBufferRequestParams.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "asyncFlush",
        "destroyTransferBuffer",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a DeferredCommandBufferRequestParams member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(DeferredCommandBufferRequestParams.prototype, "asyncFlush", {
    get: function() {
      if (this.$tag != DeferredCommandBufferRequestParams.Tags.asyncFlush) {
        throw new ReferenceError(
            "DeferredCommandBufferRequestParams.asyncFlush is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredCommandBufferRequestParams.Tags.asyncFlush;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredCommandBufferRequestParams.prototype, "destroyTransferBuffer", {
    get: function() {
      if (this.$tag != DeferredCommandBufferRequestParams.Tags.destroyTransferBuffer) {
        throw new ReferenceError(
            "DeferredCommandBufferRequestParams.destroyTransferBuffer is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredCommandBufferRequestParams.Tags.destroyTransferBuffer;
      this.$data = value;
    }
  });


    DeferredCommandBufferRequestParams.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case DeferredCommandBufferRequestParams.Tags.asyncFlush:
          encoder.encodeStructPointer(AsyncFlushParams, val.asyncFlush);
          break;
        case DeferredCommandBufferRequestParams.Tags.destroyTransferBuffer:
          encoder.encodeStruct(codec.Int32, val.destroyTransferBuffer);
          break;
      }
      encoder.align();
    };


    DeferredCommandBufferRequestParams.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new DeferredCommandBufferRequestParams();
      var tag = decoder.readUint32();
      switch (tag) {
        case DeferredCommandBufferRequestParams.Tags.asyncFlush:
          result.asyncFlush = decoder.decodeStructPointer(AsyncFlushParams);
          break;
        case DeferredCommandBufferRequestParams.Tags.destroyTransferBuffer:
          result.destroyTransferBuffer = decoder.decodeStruct(codec.Int32);
          break;
      }
      decoder.align();

      return result;
    };


    DeferredCommandBufferRequestParams.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case DeferredCommandBufferRequestParams.Tags.asyncFlush:
          

    // validate DeferredCommandBufferRequestParams.asyncFlush
    err = messageValidator.validateStructPointer(data_offset, AsyncFlushParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredCommandBufferRequestParams.Tags.destroyTransferBuffer:
          

          break;
      }

      return validator.validationError.NONE;
    };

  DeferredCommandBufferRequestParams.encodedSize = 16;

  function DeferredSharedImageRequest(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  DeferredSharedImageRequest.Tags = {
    nop: 0,
    createSharedImage: 1,
    createSharedImageWithData: 2,
    createSharedImageWithBuffer: 3,
    registerUploadBuffer: 4,
    updateSharedImage: 5,
    copyToGpuMemoryBuffer: 6,
    destroySharedImage: 7,
    addReferenceToSharedImage: 8,
    registerDxgiFence: 9,
    updateDxgiFence: 10,
    unregisterDxgiFence: 11,
    createSharedImagePool: 12,
    destroySharedImagePool: 13,
  };

  DeferredSharedImageRequest.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  DeferredSharedImageRequest.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "nop",
        "createSharedImage",
        "createSharedImageWithData",
        "createSharedImageWithBuffer",
        "registerUploadBuffer",
        "updateSharedImage",
        "copyToGpuMemoryBuffer",
        "destroySharedImage",
        "addReferenceToSharedImage",
        "registerDxgiFence",
        "updateDxgiFence",
        "unregisterDxgiFence",
        "createSharedImagePool",
        "destroySharedImagePool",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a DeferredSharedImageRequest member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(DeferredSharedImageRequest.prototype, "nop", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.nop) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.nop is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.nop;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "createSharedImage", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.createSharedImage) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.createSharedImage is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.createSharedImage;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "createSharedImageWithData", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.createSharedImageWithData) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.createSharedImageWithData is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.createSharedImageWithData;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "createSharedImageWithBuffer", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.createSharedImageWithBuffer) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.createSharedImageWithBuffer is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.createSharedImageWithBuffer;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "registerUploadBuffer", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.registerUploadBuffer) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.registerUploadBuffer is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.registerUploadBuffer;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "updateSharedImage", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.updateSharedImage) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.updateSharedImage is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.updateSharedImage;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "copyToGpuMemoryBuffer", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.copyToGpuMemoryBuffer) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.copyToGpuMemoryBuffer is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.copyToGpuMemoryBuffer;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "destroySharedImage", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.destroySharedImage) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.destroySharedImage is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.destroySharedImage;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "addReferenceToSharedImage", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.addReferenceToSharedImage) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.addReferenceToSharedImage is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.addReferenceToSharedImage;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "registerDxgiFence", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.registerDxgiFence) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.registerDxgiFence is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.registerDxgiFence;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "updateDxgiFence", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.updateDxgiFence) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.updateDxgiFence is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.updateDxgiFence;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "unregisterDxgiFence", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.unregisterDxgiFence) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.unregisterDxgiFence is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.unregisterDxgiFence;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "createSharedImagePool", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.createSharedImagePool) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.createSharedImagePool is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.createSharedImagePool;
      this.$data = value;
    }
  });
  Object.defineProperty(DeferredSharedImageRequest.prototype, "destroySharedImagePool", {
    get: function() {
      if (this.$tag != DeferredSharedImageRequest.Tags.destroySharedImagePool) {
        throw new ReferenceError(
            "DeferredSharedImageRequest.destroySharedImagePool is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = DeferredSharedImageRequest.Tags.destroySharedImagePool;
      this.$data = value;
    }
  });


    DeferredSharedImageRequest.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case DeferredSharedImageRequest.Tags.nop:
          encoder.encodeStruct(codec.Uint8, val.nop);
          break;
        case DeferredSharedImageRequest.Tags.createSharedImage:
          encoder.encodeStructPointer(CreateSharedImageParams, val.createSharedImage);
          break;
        case DeferredSharedImageRequest.Tags.createSharedImageWithData:
          encoder.encodeStructPointer(CreateSharedImageWithDataParams, val.createSharedImageWithData);
          break;
        case DeferredSharedImageRequest.Tags.createSharedImageWithBuffer:
          encoder.encodeStructPointer(CreateSharedImageWithBufferParams, val.createSharedImageWithBuffer);
          break;
        case DeferredSharedImageRequest.Tags.registerUploadBuffer:
          encoder.encodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion, val.registerUploadBuffer);
          break;
        case DeferredSharedImageRequest.Tags.updateSharedImage:
          encoder.encodeStructPointer(UpdateSharedImageParams, val.updateSharedImage);
          break;
        case DeferredSharedImageRequest.Tags.copyToGpuMemoryBuffer:
          encoder.encodeStructPointer(CopyToGpuMemoryBufferParams, val.copyToGpuMemoryBuffer);
          break;
        case DeferredSharedImageRequest.Tags.destroySharedImage:
          encoder.encodeStructPointer(mailbox$.Mailbox, val.destroySharedImage);
          break;
        case DeferredSharedImageRequest.Tags.addReferenceToSharedImage:
          encoder.encodeStructPointer(AddReferenceToSharedImageParams, val.addReferenceToSharedImage);
          break;
        case DeferredSharedImageRequest.Tags.registerDxgiFence:
          encoder.encodeStructPointer(RegisterDxgiFenceParams, val.registerDxgiFence);
          break;
        case DeferredSharedImageRequest.Tags.updateDxgiFence:
          encoder.encodeStructPointer(UpdateDxgiFenceParams, val.updateDxgiFence);
          break;
        case DeferredSharedImageRequest.Tags.unregisterDxgiFence:
          encoder.encodeStructPointer(UnregisterDxgiFenceParams, val.unregisterDxgiFence);
          break;
        case DeferredSharedImageRequest.Tags.createSharedImagePool:
          encoder.encodeStructPointer(CreateSharedImagePoolParams, val.createSharedImagePool);
          break;
        case DeferredSharedImageRequest.Tags.destroySharedImagePool:
          encoder.encodeStructPointer(DestroySharedImagePoolParams, val.destroySharedImagePool);
          break;
      }
      encoder.align();
    };


    DeferredSharedImageRequest.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new DeferredSharedImageRequest();
      var tag = decoder.readUint32();
      switch (tag) {
        case DeferredSharedImageRequest.Tags.nop:
          result.nop = decoder.decodeStruct(codec.Uint8);
          break;
        case DeferredSharedImageRequest.Tags.createSharedImage:
          result.createSharedImage = decoder.decodeStructPointer(CreateSharedImageParams);
          break;
        case DeferredSharedImageRequest.Tags.createSharedImageWithData:
          result.createSharedImageWithData = decoder.decodeStructPointer(CreateSharedImageWithDataParams);
          break;
        case DeferredSharedImageRequest.Tags.createSharedImageWithBuffer:
          result.createSharedImageWithBuffer = decoder.decodeStructPointer(CreateSharedImageWithBufferParams);
          break;
        case DeferredSharedImageRequest.Tags.registerUploadBuffer:
          result.registerUploadBuffer = decoder.decodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion);
          break;
        case DeferredSharedImageRequest.Tags.updateSharedImage:
          result.updateSharedImage = decoder.decodeStructPointer(UpdateSharedImageParams);
          break;
        case DeferredSharedImageRequest.Tags.copyToGpuMemoryBuffer:
          result.copyToGpuMemoryBuffer = decoder.decodeStructPointer(CopyToGpuMemoryBufferParams);
          break;
        case DeferredSharedImageRequest.Tags.destroySharedImage:
          result.destroySharedImage = decoder.decodeStructPointer(mailbox$.Mailbox);
          break;
        case DeferredSharedImageRequest.Tags.addReferenceToSharedImage:
          result.addReferenceToSharedImage = decoder.decodeStructPointer(AddReferenceToSharedImageParams);
          break;
        case DeferredSharedImageRequest.Tags.registerDxgiFence:
          result.registerDxgiFence = decoder.decodeStructPointer(RegisterDxgiFenceParams);
          break;
        case DeferredSharedImageRequest.Tags.updateDxgiFence:
          result.updateDxgiFence = decoder.decodeStructPointer(UpdateDxgiFenceParams);
          break;
        case DeferredSharedImageRequest.Tags.unregisterDxgiFence:
          result.unregisterDxgiFence = decoder.decodeStructPointer(UnregisterDxgiFenceParams);
          break;
        case DeferredSharedImageRequest.Tags.createSharedImagePool:
          result.createSharedImagePool = decoder.decodeStructPointer(CreateSharedImagePoolParams);
          break;
        case DeferredSharedImageRequest.Tags.destroySharedImagePool:
          result.destroySharedImagePool = decoder.decodeStructPointer(DestroySharedImagePoolParams);
          break;
      }
      decoder.align();

      return result;
    };


    DeferredSharedImageRequest.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case DeferredSharedImageRequest.Tags.nop:
          

          break;
        case DeferredSharedImageRequest.Tags.createSharedImage:
          

    // validate DeferredSharedImageRequest.createSharedImage
    err = messageValidator.validateStructPointer(data_offset, CreateSharedImageParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.createSharedImageWithData:
          

    // validate DeferredSharedImageRequest.createSharedImageWithData
    err = messageValidator.validateStructPointer(data_offset, CreateSharedImageWithDataParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.createSharedImageWithBuffer:
          

    // validate DeferredSharedImageRequest.createSharedImageWithBuffer
    err = messageValidator.validateStructPointer(data_offset, CreateSharedImageWithBufferParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.registerUploadBuffer:
          

    // validate DeferredSharedImageRequest.registerUploadBuffer
    err = messageValidator.validateStructPointer(data_offset, shared_memory$.ReadOnlySharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.updateSharedImage:
          

    // validate DeferredSharedImageRequest.updateSharedImage
    err = messageValidator.validateStructPointer(data_offset, UpdateSharedImageParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.copyToGpuMemoryBuffer:
          

    // validate DeferredSharedImageRequest.copyToGpuMemoryBuffer
    err = messageValidator.validateStructPointer(data_offset, CopyToGpuMemoryBufferParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.destroySharedImage:
          

    // validate DeferredSharedImageRequest.destroySharedImage
    err = messageValidator.validateStructPointer(data_offset, mailbox$.Mailbox, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.addReferenceToSharedImage:
          

    // validate DeferredSharedImageRequest.addReferenceToSharedImage
    err = messageValidator.validateStructPointer(data_offset, AddReferenceToSharedImageParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.registerDxgiFence:
          

    // validate DeferredSharedImageRequest.registerDxgiFence
    err = messageValidator.validateStructPointer(data_offset, RegisterDxgiFenceParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.updateDxgiFence:
          

    // validate DeferredSharedImageRequest.updateDxgiFence
    err = messageValidator.validateStructPointer(data_offset, UpdateDxgiFenceParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.unregisterDxgiFence:
          

    // validate DeferredSharedImageRequest.unregisterDxgiFence
    err = messageValidator.validateStructPointer(data_offset, UnregisterDxgiFenceParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.createSharedImagePool:
          

    // validate DeferredSharedImageRequest.createSharedImagePool
    err = messageValidator.validateStructPointer(data_offset, CreateSharedImagePoolParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case DeferredSharedImageRequest.Tags.destroySharedImagePool:
          

    // validate DeferredSharedImageRequest.destroySharedImagePool
    err = messageValidator.validateStructPointer(data_offset, DestroySharedImagePoolParams, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  DeferredSharedImageRequest.encodedSize = 16;
  var kGpuChannel_CrashForTesting_Name = 0;
  var kGpuChannel_TerminateForTesting_Name = 1;
  var kGpuChannel_GetChannelToken_Name = 2;
  var kGpuChannel_GetGPUInfo_Name = 3;
  var kGpuChannel_Flush_Name = 4;
  var kGpuChannel_GetSharedMemoryForFlushId_Name = 5;
  var kGpuChannel_CreateCommandBuffer_Name = 6;
  var kGpuChannel_DestroyCommandBuffer_Name = 7;
  var kGpuChannel_FlushDeferredRequests_Name = 8;
  var kGpuChannel_CreateGpuMemoryBuffer_Name = 9;
  var kGpuChannel_CreateDCOMPTexture_Name = 10;
  var kGpuChannel_WaitForTokenInRange_Name = 11;
  var kGpuChannel_WaitForGetOffsetInRange_Name = 12;
  var kGpuChannel_CopyToGpuMemoryBufferAsync_Name = 13;
  var kGpuChannel_CopyNativeGmbToSharedMemoryAsync_Name = 14;

  function GpuChannelPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(GpuChannel,
                                                   handleOrPtrInfo);
  }

  function GpuChannelAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        GpuChannel, associatedInterfacePtrInfo);
  }

  GpuChannelAssociatedPtr.prototype =
      Object.create(GpuChannelPtr.prototype);
  GpuChannelAssociatedPtr.prototype.constructor =
      GpuChannelAssociatedPtr;

  function GpuChannelProxy(receiver) {
    this.receiver_ = receiver;
  }
  GpuChannelPtr.prototype.crashForTesting = function() {
    return GpuChannelProxy.prototype.crashForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.crashForTesting = function() {
    var params_ = new GpuChannel_CrashForTesting_Params();
    var builder = new codec.MessageV0Builder(
        kGpuChannel_CrashForTesting_Name,
        codec.align(GpuChannel_CrashForTesting_Params.encodedSize));
    builder.encodeStruct(GpuChannel_CrashForTesting_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  GpuChannelPtr.prototype.terminateForTesting = function() {
    return GpuChannelProxy.prototype.terminateForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.terminateForTesting = function() {
    var params_ = new GpuChannel_TerminateForTesting_Params();
    var builder = new codec.MessageV0Builder(
        kGpuChannel_TerminateForTesting_Name,
        codec.align(GpuChannel_TerminateForTesting_Params.encodedSize));
    builder.encodeStruct(GpuChannel_TerminateForTesting_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  GpuChannelPtr.prototype.getChannelToken = function() {
    return GpuChannelProxy.prototype.getChannelToken
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.getChannelToken = function() {
    var params_ = new GpuChannel_GetChannelToken_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_GetChannelToken_Name,
          codec.align(GpuChannel_GetChannelToken_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_GetChannelToken_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_GetChannelToken_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.getGPUInfo = function() {
    return GpuChannelProxy.prototype.getGPUInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.getGPUInfo = function() {
    var params_ = new GpuChannel_GetGPUInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_GetGPUInfo_Name,
          codec.align(GpuChannel_GetGPUInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_GetGPUInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_GetGPUInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.flush = function() {
    return GpuChannelProxy.prototype.flush
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.flush = function() {
    var params_ = new GpuChannel_Flush_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_Flush_Name,
          codec.align(GpuChannel_Flush_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_Flush_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_Flush_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.getSharedMemoryForFlushId = function() {
    return GpuChannelProxy.prototype.getSharedMemoryForFlushId
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.getSharedMemoryForFlushId = function() {
    var params_ = new GpuChannel_GetSharedMemoryForFlushId_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_GetSharedMemoryForFlushId_Name,
          codec.align(GpuChannel_GetSharedMemoryForFlushId_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_GetSharedMemoryForFlushId_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_GetSharedMemoryForFlushId_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.createCommandBuffer = function() {
    return GpuChannelProxy.prototype.createCommandBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.createCommandBuffer = function(params, routingId, sharedState, receiver, client) {
    var params_ = new GpuChannel_CreateCommandBuffer_Params();
    params_.params = params;
    params_.routingId = routingId;
    params_.sharedState = sharedState;
    params_.receiver = receiver;
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kGpuChannel_CreateCommandBuffer_Name,
          codec.align(GpuChannel_CreateCommandBuffer_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(GpuChannel_CreateCommandBuffer_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_CreateCommandBuffer_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.destroyCommandBuffer = function() {
    return GpuChannelProxy.prototype.destroyCommandBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.destroyCommandBuffer = function(routingId) {
    var params_ = new GpuChannel_DestroyCommandBuffer_Params();
    params_.routingId = routingId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_DestroyCommandBuffer_Name,
          codec.align(GpuChannel_DestroyCommandBuffer_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_DestroyCommandBuffer_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_DestroyCommandBuffer_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.flushDeferredRequests = function() {
    return GpuChannelProxy.prototype.flushDeferredRequests
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.flushDeferredRequests = function(requests, flushedDeferredMessageId) {
    var params_ = new GpuChannel_FlushDeferredRequests_Params();
    params_.requests = requests;
    params_.flushedDeferredMessageId = flushedDeferredMessageId;
    var builder = new codec.MessageV0Builder(
        kGpuChannel_FlushDeferredRequests_Name,
        codec.align(GpuChannel_FlushDeferredRequests_Params.encodedSize));
    builder.encodeStruct(GpuChannel_FlushDeferredRequests_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  GpuChannelPtr.prototype.createGpuMemoryBuffer = function() {
    return GpuChannelProxy.prototype.createGpuMemoryBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.createGpuMemoryBuffer = function(size, format, bufferUsage) {
    var params_ = new GpuChannel_CreateGpuMemoryBuffer_Params();
    params_.size = size;
    params_.format = format;
    params_.bufferUsage = bufferUsage;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_CreateGpuMemoryBuffer_Name,
          codec.align(GpuChannel_CreateGpuMemoryBuffer_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_CreateGpuMemoryBuffer_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_CreateGpuMemoryBuffer_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.createDCOMPTexture = function() {
    return GpuChannelProxy.prototype.createDCOMPTexture
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.createDCOMPTexture = function(routeId, receiver) {
    var params_ = new GpuChannel_CreateDCOMPTexture_Params();
    params_.routeId = routeId;
    params_.receiver = receiver;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kGpuChannel_CreateDCOMPTexture_Name,
          codec.align(GpuChannel_CreateDCOMPTexture_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(GpuChannel_CreateDCOMPTexture_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_CreateDCOMPTexture_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.waitForTokenInRange = function() {
    return GpuChannelProxy.prototype.waitForTokenInRange
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.waitForTokenInRange = function(routingId, start, end) {
    var params_ = new GpuChannel_WaitForTokenInRange_Params();
    params_.routingId = routingId;
    params_.start = start;
    params_.end = end;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_WaitForTokenInRange_Name,
          codec.align(GpuChannel_WaitForTokenInRange_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_WaitForTokenInRange_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_WaitForTokenInRange_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.waitForGetOffsetInRange = function() {
    return GpuChannelProxy.prototype.waitForGetOffsetInRange
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.waitForGetOffsetInRange = function(routingId, setGetBufferCount, start, end) {
    var params_ = new GpuChannel_WaitForGetOffsetInRange_Params();
    params_.routingId = routingId;
    params_.setGetBufferCount = setGetBufferCount;
    params_.start = start;
    params_.end = end;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_WaitForGetOffsetInRange_Name,
          codec.align(GpuChannel_WaitForGetOffsetInRange_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_WaitForGetOffsetInRange_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_WaitForGetOffsetInRange_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.copyToGpuMemoryBufferAsync = function() {
    return GpuChannelProxy.prototype.copyToGpuMemoryBufferAsync
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.copyToGpuMemoryBufferAsync = function(mailbox, syncTokenDependencies, releaseCount) {
    var params_ = new GpuChannel_CopyToGpuMemoryBufferAsync_Params();
    params_.mailbox = mailbox;
    params_.syncTokenDependencies = syncTokenDependencies;
    params_.releaseCount = releaseCount;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_CopyToGpuMemoryBufferAsync_Name,
          codec.align(GpuChannel_CopyToGpuMemoryBufferAsync_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_CopyToGpuMemoryBufferAsync_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuChannelPtr.prototype.copyNativeGmbToSharedMemoryAsync = function() {
    return GpuChannelProxy.prototype.copyNativeGmbToSharedMemoryAsync
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuChannelProxy.prototype.copyNativeGmbToSharedMemoryAsync = function(bufferHandle, sharedMemory) {
    var params_ = new GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params();
    params_.bufferHandle = bufferHandle;
    params_.sharedMemory = sharedMemory;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuChannel_CopyNativeGmbToSharedMemoryAsync_Name,
          codec.align(GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function GpuChannelStub(delegate) {
    this.delegate_ = delegate;
  }
  GpuChannelStub.prototype.crashForTesting = function() {
    return this.delegate_ && this.delegate_.crashForTesting && this.delegate_.crashForTesting();
  }
  GpuChannelStub.prototype.terminateForTesting = function() {
    return this.delegate_ && this.delegate_.terminateForTesting && this.delegate_.terminateForTesting();
  }
  GpuChannelStub.prototype.getChannelToken = function() {
    return this.delegate_ && this.delegate_.getChannelToken && this.delegate_.getChannelToken();
  }
  GpuChannelStub.prototype.getGPUInfo = function() {
    return this.delegate_ && this.delegate_.getGPUInfo && this.delegate_.getGPUInfo();
  }
  GpuChannelStub.prototype.flush = function() {
    return this.delegate_ && this.delegate_.flush && this.delegate_.flush();
  }
  GpuChannelStub.prototype.getSharedMemoryForFlushId = function() {
    return this.delegate_ && this.delegate_.getSharedMemoryForFlushId && this.delegate_.getSharedMemoryForFlushId();
  }
  GpuChannelStub.prototype.createCommandBuffer = function(params, routingId, sharedState, receiver, client) {
    return this.delegate_ && this.delegate_.createCommandBuffer && this.delegate_.createCommandBuffer(params, routingId, sharedState, receiver, client);
  }
  GpuChannelStub.prototype.destroyCommandBuffer = function(routingId) {
    return this.delegate_ && this.delegate_.destroyCommandBuffer && this.delegate_.destroyCommandBuffer(routingId);
  }
  GpuChannelStub.prototype.flushDeferredRequests = function(requests, flushedDeferredMessageId) {
    return this.delegate_ && this.delegate_.flushDeferredRequests && this.delegate_.flushDeferredRequests(requests, flushedDeferredMessageId);
  }
  GpuChannelStub.prototype.createGpuMemoryBuffer = function(size, format, bufferUsage) {
    return this.delegate_ && this.delegate_.createGpuMemoryBuffer && this.delegate_.createGpuMemoryBuffer(size, format, bufferUsage);
  }
  GpuChannelStub.prototype.createDCOMPTexture = function(routeId, receiver) {
    return this.delegate_ && this.delegate_.createDCOMPTexture && this.delegate_.createDCOMPTexture(routeId, receiver);
  }
  GpuChannelStub.prototype.waitForTokenInRange = function(routingId, start, end) {
    return this.delegate_ && this.delegate_.waitForTokenInRange && this.delegate_.waitForTokenInRange(routingId, start, end);
  }
  GpuChannelStub.prototype.waitForGetOffsetInRange = function(routingId, setGetBufferCount, start, end) {
    return this.delegate_ && this.delegate_.waitForGetOffsetInRange && this.delegate_.waitForGetOffsetInRange(routingId, setGetBufferCount, start, end);
  }
  GpuChannelStub.prototype.copyToGpuMemoryBufferAsync = function(mailbox, syncTokenDependencies, releaseCount) {
    return this.delegate_ && this.delegate_.copyToGpuMemoryBufferAsync && this.delegate_.copyToGpuMemoryBufferAsync(mailbox, syncTokenDependencies, releaseCount);
  }
  GpuChannelStub.prototype.copyNativeGmbToSharedMemoryAsync = function(bufferHandle, sharedMemory) {
    return this.delegate_ && this.delegate_.copyNativeGmbToSharedMemoryAsync && this.delegate_.copyNativeGmbToSharedMemoryAsync(bufferHandle, sharedMemory);
  }

  GpuChannelStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGpuChannel_CrashForTesting_Name:
      var params = reader.decodeStruct(GpuChannel_CrashForTesting_Params);
      this.crashForTesting();
      return true;
    case kGpuChannel_TerminateForTesting_Name:
      var params = reader.decodeStruct(GpuChannel_TerminateForTesting_Params);
      this.terminateForTesting();
      return true;
    case kGpuChannel_FlushDeferredRequests_Name:
      var params = reader.decodeStruct(GpuChannel_FlushDeferredRequests_Params);
      this.flushDeferredRequests(params.requests, params.flushedDeferredMessageId);
      return true;
    default:
      return false;
    }
  };

  GpuChannelStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGpuChannel_GetChannelToken_Name:
      var params = reader.decodeStruct(GpuChannel_GetChannelToken_Params);
      this.getChannelToken().then(function(response) {
        var responseParams =
            new GpuChannel_GetChannelToken_ResponseParams();
        responseParams.token = response.token;
        var builder = new codec.MessageV1Builder(
            kGpuChannel_GetChannelToken_Name,
            codec.align(GpuChannel_GetChannelToken_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_GetChannelToken_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_GetGPUInfo_Name:
      var params = reader.decodeStruct(GpuChannel_GetGPUInfo_Params);
      this.getGPUInfo().then(function(response) {
        var responseParams =
            new GpuChannel_GetGPUInfo_ResponseParams();
        responseParams.gpuInfo = response.gpuInfo;
        responseParams.gpuFeatureInfo = response.gpuFeatureInfo;
        responseParams.sharedImageCapabilities = response.sharedImageCapabilities;
        var builder = new codec.MessageV1Builder(
            kGpuChannel_GetGPUInfo_Name,
            codec.align(GpuChannel_GetGPUInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_GetGPUInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_Flush_Name:
      var params = reader.decodeStruct(GpuChannel_Flush_Params);
      this.flush().then(function(response) {
        var responseParams =
            new GpuChannel_Flush_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kGpuChannel_Flush_Name,
            codec.align(GpuChannel_Flush_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_Flush_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_GetSharedMemoryForFlushId_Name:
      var params = reader.decodeStruct(GpuChannel_GetSharedMemoryForFlushId_Params);
      this.getSharedMemoryForFlushId().then(function(response) {
        var responseParams =
            new GpuChannel_GetSharedMemoryForFlushId_ResponseParams();
        responseParams.versionBuffer = response.versionBuffer;
        var builder = new codec.MessageV1Builder(
            kGpuChannel_GetSharedMemoryForFlushId_Name,
            codec.align(GpuChannel_GetSharedMemoryForFlushId_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_GetSharedMemoryForFlushId_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_CreateCommandBuffer_Name:
      var params = reader.decodeStruct(GpuChannel_CreateCommandBuffer_Params);
      this.createCommandBuffer(params.params, params.routingId, params.sharedState, params.receiver, params.client).then(function(response) {
        var responseParams =
            new GpuChannel_CreateCommandBuffer_ResponseParams();
        responseParams.result = response.result;
        responseParams.capabilties = response.capabilties;
        responseParams.glCapabilities = response.glCapabilities;
        var builder = new codec.MessageV2Builder(
            kGpuChannel_CreateCommandBuffer_Name,
            codec.align(GpuChannel_CreateCommandBuffer_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(GpuChannel_CreateCommandBuffer_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_DestroyCommandBuffer_Name:
      var params = reader.decodeStruct(GpuChannel_DestroyCommandBuffer_Params);
      this.destroyCommandBuffer(params.routingId).then(function(response) {
        var responseParams =
            new GpuChannel_DestroyCommandBuffer_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kGpuChannel_DestroyCommandBuffer_Name,
            codec.align(GpuChannel_DestroyCommandBuffer_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_DestroyCommandBuffer_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_CreateGpuMemoryBuffer_Name:
      var params = reader.decodeStruct(GpuChannel_CreateGpuMemoryBuffer_Params);
      this.createGpuMemoryBuffer(params.size, params.format, params.bufferUsage).then(function(response) {
        var responseParams =
            new GpuChannel_CreateGpuMemoryBuffer_ResponseParams();
        responseParams.bufferHandle = response.bufferHandle;
        var builder = new codec.MessageV1Builder(
            kGpuChannel_CreateGpuMemoryBuffer_Name,
            codec.align(GpuChannel_CreateGpuMemoryBuffer_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_CreateGpuMemoryBuffer_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_CreateDCOMPTexture_Name:
      var params = reader.decodeStruct(GpuChannel_CreateDCOMPTexture_Params);
      this.createDCOMPTexture(params.routeId, params.receiver).then(function(response) {
        var responseParams =
            new GpuChannel_CreateDCOMPTexture_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV2Builder(
            kGpuChannel_CreateDCOMPTexture_Name,
            codec.align(GpuChannel_CreateDCOMPTexture_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(GpuChannel_CreateDCOMPTexture_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_WaitForTokenInRange_Name:
      var params = reader.decodeStruct(GpuChannel_WaitForTokenInRange_Params);
      this.waitForTokenInRange(params.routingId, params.start, params.end).then(function(response) {
        var responseParams =
            new GpuChannel_WaitForTokenInRange_ResponseParams();
        responseParams.state = response.state;
        var builder = new codec.MessageV1Builder(
            kGpuChannel_WaitForTokenInRange_Name,
            codec.align(GpuChannel_WaitForTokenInRange_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_WaitForTokenInRange_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_WaitForGetOffsetInRange_Name:
      var params = reader.decodeStruct(GpuChannel_WaitForGetOffsetInRange_Params);
      this.waitForGetOffsetInRange(params.routingId, params.setGetBufferCount, params.start, params.end).then(function(response) {
        var responseParams =
            new GpuChannel_WaitForGetOffsetInRange_ResponseParams();
        responseParams.state = response.state;
        var builder = new codec.MessageV1Builder(
            kGpuChannel_WaitForGetOffsetInRange_Name,
            codec.align(GpuChannel_WaitForGetOffsetInRange_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_WaitForGetOffsetInRange_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_CopyToGpuMemoryBufferAsync_Name:
      var params = reader.decodeStruct(GpuChannel_CopyToGpuMemoryBufferAsync_Params);
      this.copyToGpuMemoryBufferAsync(params.mailbox, params.syncTokenDependencies, params.releaseCount).then(function(response) {
        var responseParams =
            new GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kGpuChannel_CopyToGpuMemoryBufferAsync_Name,
            codec.align(GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGpuChannel_CopyNativeGmbToSharedMemoryAsync_Name:
      var params = reader.decodeStruct(GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params);
      this.copyNativeGmbToSharedMemoryAsync(params.bufferHandle, params.sharedMemory).then(function(response) {
        var responseParams =
            new GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kGpuChannel_CopyNativeGmbToSharedMemoryAsync_Name,
            codec.align(GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateGpuChannelRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kGpuChannel_CrashForTesting_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = GpuChannel_CrashForTesting_Params;
      break;
      case kGpuChannel_TerminateForTesting_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = GpuChannel_TerminateForTesting_Params;
      break;
      case kGpuChannel_GetChannelToken_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_GetChannelToken_Params;
      break;
      case kGpuChannel_GetGPUInfo_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_GetGPUInfo_Params;
      break;
      case kGpuChannel_Flush_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_Flush_Params;
      break;
      case kGpuChannel_GetSharedMemoryForFlushId_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_GetSharedMemoryForFlushId_Params;
      break;
      case kGpuChannel_CreateCommandBuffer_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_CreateCommandBuffer_Params;
      break;
      case kGpuChannel_DestroyCommandBuffer_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_DestroyCommandBuffer_Params;
      break;
      case kGpuChannel_FlushDeferredRequests_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = GpuChannel_FlushDeferredRequests_Params;
      break;
      case kGpuChannel_CreateGpuMemoryBuffer_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_CreateGpuMemoryBuffer_Params;
      break;
      case kGpuChannel_CreateDCOMPTexture_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_CreateDCOMPTexture_Params;
      break;
      case kGpuChannel_WaitForTokenInRange_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_WaitForTokenInRange_Params;
      break;
      case kGpuChannel_WaitForGetOffsetInRange_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_WaitForGetOffsetInRange_Params;
      break;
      case kGpuChannel_CopyToGpuMemoryBufferAsync_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_CopyToGpuMemoryBufferAsync_Params;
      break;
      case kGpuChannel_CopyNativeGmbToSharedMemoryAsync_Name:
        if (message.expectsResponse())
          paramsClass = GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateGpuChannelResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kGpuChannel_GetChannelToken_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_GetChannelToken_ResponseParams;
        break;
      case kGpuChannel_GetGPUInfo_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_GetGPUInfo_ResponseParams;
        break;
      case kGpuChannel_Flush_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_Flush_ResponseParams;
        break;
      case kGpuChannel_GetSharedMemoryForFlushId_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_GetSharedMemoryForFlushId_ResponseParams;
        break;
      case kGpuChannel_CreateCommandBuffer_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_CreateCommandBuffer_ResponseParams;
        break;
      case kGpuChannel_DestroyCommandBuffer_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_DestroyCommandBuffer_ResponseParams;
        break;
      case kGpuChannel_CreateGpuMemoryBuffer_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_CreateGpuMemoryBuffer_ResponseParams;
        break;
      case kGpuChannel_CreateDCOMPTexture_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_CreateDCOMPTexture_ResponseParams;
        break;
      case kGpuChannel_WaitForTokenInRange_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_WaitForTokenInRange_ResponseParams;
        break;
      case kGpuChannel_WaitForGetOffsetInRange_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_WaitForGetOffsetInRange_ResponseParams;
        break;
      case kGpuChannel_CopyToGpuMemoryBufferAsync_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams;
        break;
      case kGpuChannel_CopyNativeGmbToSharedMemoryAsync_Name:
        if (message.isResponse())
          paramsClass = GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var GpuChannel = {
    name: 'gpu.mojom.GpuChannel',
    kVersion: 0,
    ptrClass: GpuChannelPtr,
    proxyClass: GpuChannelProxy,
    stubClass: GpuChannelStub,
    validateRequest: validateGpuChannelRequest,
    validateResponse: validateGpuChannelResponse,
  };
  GpuChannelStub.prototype.validator = validateGpuChannelRequest;
  GpuChannelProxy.prototype.validator = validateGpuChannelResponse;
  var kCommandBuffer_SetGetBuffer_Name = 0;
  var kCommandBuffer_RegisterTransferBuffer_Name = 1;
  var kCommandBuffer_CreateGpuFenceFromHandle_Name = 2;
  var kCommandBuffer_GetGpuFenceHandle_Name = 3;
  var kCommandBuffer_SignalSyncToken_Name = 4;
  var kCommandBuffer_SignalQuery_Name = 5;

  function CommandBufferPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CommandBuffer,
                                                   handleOrPtrInfo);
  }

  function CommandBufferAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CommandBuffer, associatedInterfacePtrInfo);
  }

  CommandBufferAssociatedPtr.prototype =
      Object.create(CommandBufferPtr.prototype);
  CommandBufferAssociatedPtr.prototype.constructor =
      CommandBufferAssociatedPtr;

  function CommandBufferProxy(receiver) {
    this.receiver_ = receiver;
  }
  CommandBufferPtr.prototype.setGetBuffer = function() {
    return CommandBufferProxy.prototype.setGetBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferProxy.prototype.setGetBuffer = function(shmId) {
    var params_ = new CommandBuffer_SetGetBuffer_Params();
    params_.shmId = shmId;
    var builder = new codec.MessageV0Builder(
        kCommandBuffer_SetGetBuffer_Name,
        codec.align(CommandBuffer_SetGetBuffer_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_SetGetBuffer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferPtr.prototype.registerTransferBuffer = function() {
    return CommandBufferProxy.prototype.registerTransferBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferProxy.prototype.registerTransferBuffer = function(id, buffer) {
    var params_ = new CommandBuffer_RegisterTransferBuffer_Params();
    params_.id = id;
    params_.buffer = buffer;
    var builder = new codec.MessageV0Builder(
        kCommandBuffer_RegisterTransferBuffer_Name,
        codec.align(CommandBuffer_RegisterTransferBuffer_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_RegisterTransferBuffer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferPtr.prototype.createGpuFenceFromHandle = function() {
    return CommandBufferProxy.prototype.createGpuFenceFromHandle
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferProxy.prototype.createGpuFenceFromHandle = function(gpuFenceId, fenceHandle) {
    var params_ = new CommandBuffer_CreateGpuFenceFromHandle_Params();
    params_.gpuFenceId = gpuFenceId;
    params_.fenceHandle = fenceHandle;
    var builder = new codec.MessageV0Builder(
        kCommandBuffer_CreateGpuFenceFromHandle_Name,
        codec.align(CommandBuffer_CreateGpuFenceFromHandle_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_CreateGpuFenceFromHandle_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferPtr.prototype.getGpuFenceHandle = function() {
    return CommandBufferProxy.prototype.getGpuFenceHandle
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferProxy.prototype.getGpuFenceHandle = function(id) {
    var params_ = new CommandBuffer_GetGpuFenceHandle_Params();
    params_.id = id;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCommandBuffer_GetGpuFenceHandle_Name,
          codec.align(CommandBuffer_GetGpuFenceHandle_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CommandBuffer_GetGpuFenceHandle_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CommandBuffer_GetGpuFenceHandle_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CommandBufferPtr.prototype.signalSyncToken = function() {
    return CommandBufferProxy.prototype.signalSyncToken
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferProxy.prototype.signalSyncToken = function(syncToken, signalId) {
    var params_ = new CommandBuffer_SignalSyncToken_Params();
    params_.syncToken = syncToken;
    params_.signalId = signalId;
    var builder = new codec.MessageV0Builder(
        kCommandBuffer_SignalSyncToken_Name,
        codec.align(CommandBuffer_SignalSyncToken_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_SignalSyncToken_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferPtr.prototype.signalQuery = function() {
    return CommandBufferProxy.prototype.signalQuery
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferProxy.prototype.signalQuery = function(query, signalId) {
    var params_ = new CommandBuffer_SignalQuery_Params();
    params_.query = query;
    params_.signalId = signalId;
    var builder = new codec.MessageV0Builder(
        kCommandBuffer_SignalQuery_Name,
        codec.align(CommandBuffer_SignalQuery_Params.encodedSize));
    builder.encodeStruct(CommandBuffer_SignalQuery_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CommandBufferStub(delegate) {
    this.delegate_ = delegate;
  }
  CommandBufferStub.prototype.setGetBuffer = function(shmId) {
    return this.delegate_ && this.delegate_.setGetBuffer && this.delegate_.setGetBuffer(shmId);
  }
  CommandBufferStub.prototype.registerTransferBuffer = function(id, buffer) {
    return this.delegate_ && this.delegate_.registerTransferBuffer && this.delegate_.registerTransferBuffer(id, buffer);
  }
  CommandBufferStub.prototype.createGpuFenceFromHandle = function(gpuFenceId, fenceHandle) {
    return this.delegate_ && this.delegate_.createGpuFenceFromHandle && this.delegate_.createGpuFenceFromHandle(gpuFenceId, fenceHandle);
  }
  CommandBufferStub.prototype.getGpuFenceHandle = function(id) {
    return this.delegate_ && this.delegate_.getGpuFenceHandle && this.delegate_.getGpuFenceHandle(id);
  }
  CommandBufferStub.prototype.signalSyncToken = function(syncToken, signalId) {
    return this.delegate_ && this.delegate_.signalSyncToken && this.delegate_.signalSyncToken(syncToken, signalId);
  }
  CommandBufferStub.prototype.signalQuery = function(query, signalId) {
    return this.delegate_ && this.delegate_.signalQuery && this.delegate_.signalQuery(query, signalId);
  }

  CommandBufferStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCommandBuffer_SetGetBuffer_Name:
      var params = reader.decodeStruct(CommandBuffer_SetGetBuffer_Params);
      this.setGetBuffer(params.shmId);
      return true;
    case kCommandBuffer_RegisterTransferBuffer_Name:
      var params = reader.decodeStruct(CommandBuffer_RegisterTransferBuffer_Params);
      this.registerTransferBuffer(params.id, params.buffer);
      return true;
    case kCommandBuffer_CreateGpuFenceFromHandle_Name:
      var params = reader.decodeStruct(CommandBuffer_CreateGpuFenceFromHandle_Params);
      this.createGpuFenceFromHandle(params.gpuFenceId, params.fenceHandle);
      return true;
    case kCommandBuffer_SignalSyncToken_Name:
      var params = reader.decodeStruct(CommandBuffer_SignalSyncToken_Params);
      this.signalSyncToken(params.syncToken, params.signalId);
      return true;
    case kCommandBuffer_SignalQuery_Name:
      var params = reader.decodeStruct(CommandBuffer_SignalQuery_Params);
      this.signalQuery(params.query, params.signalId);
      return true;
    default:
      return false;
    }
  };

  CommandBufferStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCommandBuffer_GetGpuFenceHandle_Name:
      var params = reader.decodeStruct(CommandBuffer_GetGpuFenceHandle_Params);
      this.getGpuFenceHandle(params.id).then(function(response) {
        var responseParams =
            new CommandBuffer_GetGpuFenceHandle_ResponseParams();
        responseParams.fenceHandle = response.fenceHandle;
        var builder = new codec.MessageV1Builder(
            kCommandBuffer_GetGpuFenceHandle_Name,
            codec.align(CommandBuffer_GetGpuFenceHandle_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CommandBuffer_GetGpuFenceHandle_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCommandBufferRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCommandBuffer_SetGetBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_SetGetBuffer_Params;
      break;
      case kCommandBuffer_RegisterTransferBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_RegisterTransferBuffer_Params;
      break;
      case kCommandBuffer_CreateGpuFenceFromHandle_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_CreateGpuFenceFromHandle_Params;
      break;
      case kCommandBuffer_GetGpuFenceHandle_Name:
        if (message.expectsResponse())
          paramsClass = CommandBuffer_GetGpuFenceHandle_Params;
      break;
      case kCommandBuffer_SignalSyncToken_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_SignalSyncToken_Params;
      break;
      case kCommandBuffer_SignalQuery_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBuffer_SignalQuery_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCommandBufferResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCommandBuffer_GetGpuFenceHandle_Name:
        if (message.isResponse())
          paramsClass = CommandBuffer_GetGpuFenceHandle_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CommandBuffer = {
    name: 'gpu.mojom.CommandBuffer',
    kVersion: 0,
    ptrClass: CommandBufferPtr,
    proxyClass: CommandBufferProxy,
    stubClass: CommandBufferStub,
    validateRequest: validateCommandBufferRequest,
    validateResponse: validateCommandBufferResponse,
  };
  CommandBufferStub.prototype.validator = validateCommandBufferRequest;
  CommandBufferProxy.prototype.validator = validateCommandBufferResponse;
  var kCommandBufferClient_OnConsoleMessage_Name = 0;
  var kCommandBufferClient_OnGpuSwitched_Name = 1;
  var kCommandBufferClient_OnDestroyed_Name = 2;
  var kCommandBufferClient_OnReturnData_Name = 3;
  var kCommandBufferClient_OnSignalAck_Name = 4;

  function CommandBufferClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CommandBufferClient,
                                                   handleOrPtrInfo);
  }

  function CommandBufferClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CommandBufferClient, associatedInterfacePtrInfo);
  }

  CommandBufferClientAssociatedPtr.prototype =
      Object.create(CommandBufferClientPtr.prototype);
  CommandBufferClientAssociatedPtr.prototype.constructor =
      CommandBufferClientAssociatedPtr;

  function CommandBufferClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  CommandBufferClientPtr.prototype.onConsoleMessage = function() {
    return CommandBufferClientProxy.prototype.onConsoleMessage
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferClientProxy.prototype.onConsoleMessage = function(message) {
    var params_ = new CommandBufferClient_OnConsoleMessage_Params();
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kCommandBufferClient_OnConsoleMessage_Name,
        codec.align(CommandBufferClient_OnConsoleMessage_Params.encodedSize));
    builder.encodeStruct(CommandBufferClient_OnConsoleMessage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferClientPtr.prototype.onGpuSwitched = function() {
    return CommandBufferClientProxy.prototype.onGpuSwitched
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferClientProxy.prototype.onGpuSwitched = function() {
    var params_ = new CommandBufferClient_OnGpuSwitched_Params();
    var builder = new codec.MessageV0Builder(
        kCommandBufferClient_OnGpuSwitched_Name,
        codec.align(CommandBufferClient_OnGpuSwitched_Params.encodedSize));
    builder.encodeStruct(CommandBufferClient_OnGpuSwitched_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferClientPtr.prototype.onDestroyed = function() {
    return CommandBufferClientProxy.prototype.onDestroyed
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferClientProxy.prototype.onDestroyed = function(reason, error) {
    var params_ = new CommandBufferClient_OnDestroyed_Params();
    params_.reason = reason;
    params_.error = error;
    var builder = new codec.MessageV0Builder(
        kCommandBufferClient_OnDestroyed_Name,
        codec.align(CommandBufferClient_OnDestroyed_Params.encodedSize));
    builder.encodeStruct(CommandBufferClient_OnDestroyed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferClientPtr.prototype.onReturnData = function() {
    return CommandBufferClientProxy.prototype.onReturnData
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferClientProxy.prototype.onReturnData = function(data) {
    var params_ = new CommandBufferClient_OnReturnData_Params();
    params_.data = data;
    var builder = new codec.MessageV0Builder(
        kCommandBufferClient_OnReturnData_Name,
        codec.align(CommandBufferClient_OnReturnData_Params.encodedSize));
    builder.encodeStruct(CommandBufferClient_OnReturnData_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CommandBufferClientPtr.prototype.onSignalAck = function() {
    return CommandBufferClientProxy.prototype.onSignalAck
        .apply(this.ptr.getProxy(), arguments);
  };

  CommandBufferClientProxy.prototype.onSignalAck = function(signalId, state) {
    var params_ = new CommandBufferClient_OnSignalAck_Params();
    params_.signalId = signalId;
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kCommandBufferClient_OnSignalAck_Name,
        codec.align(CommandBufferClient_OnSignalAck_Params.encodedSize));
    builder.encodeStruct(CommandBufferClient_OnSignalAck_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CommandBufferClientStub(delegate) {
    this.delegate_ = delegate;
  }
  CommandBufferClientStub.prototype.onConsoleMessage = function(message) {
    return this.delegate_ && this.delegate_.onConsoleMessage && this.delegate_.onConsoleMessage(message);
  }
  CommandBufferClientStub.prototype.onGpuSwitched = function() {
    return this.delegate_ && this.delegate_.onGpuSwitched && this.delegate_.onGpuSwitched();
  }
  CommandBufferClientStub.prototype.onDestroyed = function(reason, error) {
    return this.delegate_ && this.delegate_.onDestroyed && this.delegate_.onDestroyed(reason, error);
  }
  CommandBufferClientStub.prototype.onReturnData = function(data) {
    return this.delegate_ && this.delegate_.onReturnData && this.delegate_.onReturnData(data);
  }
  CommandBufferClientStub.prototype.onSignalAck = function(signalId, state) {
    return this.delegate_ && this.delegate_.onSignalAck && this.delegate_.onSignalAck(signalId, state);
  }

  CommandBufferClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCommandBufferClient_OnConsoleMessage_Name:
      var params = reader.decodeStruct(CommandBufferClient_OnConsoleMessage_Params);
      this.onConsoleMessage(params.message);
      return true;
    case kCommandBufferClient_OnGpuSwitched_Name:
      var params = reader.decodeStruct(CommandBufferClient_OnGpuSwitched_Params);
      this.onGpuSwitched();
      return true;
    case kCommandBufferClient_OnDestroyed_Name:
      var params = reader.decodeStruct(CommandBufferClient_OnDestroyed_Params);
      this.onDestroyed(params.reason, params.error);
      return true;
    case kCommandBufferClient_OnReturnData_Name:
      var params = reader.decodeStruct(CommandBufferClient_OnReturnData_Params);
      this.onReturnData(params.data);
      return true;
    case kCommandBufferClient_OnSignalAck_Name:
      var params = reader.decodeStruct(CommandBufferClient_OnSignalAck_Params);
      this.onSignalAck(params.signalId, params.state);
      return true;
    default:
      return false;
    }
  };

  CommandBufferClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCommandBufferClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCommandBufferClient_OnConsoleMessage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferClient_OnConsoleMessage_Params;
      break;
      case kCommandBufferClient_OnGpuSwitched_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferClient_OnGpuSwitched_Params;
      break;
      case kCommandBufferClient_OnDestroyed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferClient_OnDestroyed_Params;
      break;
      case kCommandBufferClient_OnReturnData_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferClient_OnReturnData_Params;
      break;
      case kCommandBufferClient_OnSignalAck_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CommandBufferClient_OnSignalAck_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCommandBufferClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CommandBufferClient = {
    name: 'gpu.mojom.CommandBufferClient',
    kVersion: 0,
    ptrClass: CommandBufferClientPtr,
    proxyClass: CommandBufferClientProxy,
    stubClass: CommandBufferClientStub,
    validateRequest: validateCommandBufferClientRequest,
    validateResponse: null,
  };
  CommandBufferClientStub.prototype.validator = validateCommandBufferClientRequest;
  CommandBufferClientProxy.prototype.validator = null;
  var kDCOMPTexture_StartListening_Name = 0;
  var kDCOMPTexture_SetTextureSize_Name = 1;
  var kDCOMPTexture_SetDCOMPSurfaceHandle_Name = 2;

  function DCOMPTexturePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DCOMPTexture,
                                                   handleOrPtrInfo);
  }

  function DCOMPTextureAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DCOMPTexture, associatedInterfacePtrInfo);
  }

  DCOMPTextureAssociatedPtr.prototype =
      Object.create(DCOMPTexturePtr.prototype);
  DCOMPTextureAssociatedPtr.prototype.constructor =
      DCOMPTextureAssociatedPtr;

  function DCOMPTextureProxy(receiver) {
    this.receiver_ = receiver;
  }
  DCOMPTexturePtr.prototype.startListening = function() {
    return DCOMPTextureProxy.prototype.startListening
        .apply(this.ptr.getProxy(), arguments);
  };

  DCOMPTextureProxy.prototype.startListening = function(client) {
    var params_ = new DCOMPTexture_StartListening_Params();
    params_.client = client;
    var builder = new codec.MessageV2Builder(
        kDCOMPTexture_StartListening_Name,
        codec.align(DCOMPTexture_StartListening_Params.encodedSize));
    builder.setPayload(DCOMPTexture_StartListening_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DCOMPTexturePtr.prototype.setTextureSize = function() {
    return DCOMPTextureProxy.prototype.setTextureSize
        .apply(this.ptr.getProxy(), arguments);
  };

  DCOMPTextureProxy.prototype.setTextureSize = function(size) {
    var params_ = new DCOMPTexture_SetTextureSize_Params();
    params_.size = size;
    var builder = new codec.MessageV0Builder(
        kDCOMPTexture_SetTextureSize_Name,
        codec.align(DCOMPTexture_SetTextureSize_Params.encodedSize));
    builder.encodeStruct(DCOMPTexture_SetTextureSize_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DCOMPTexturePtr.prototype.setDCOMPSurfaceHandle = function() {
    return DCOMPTextureProxy.prototype.setDCOMPSurfaceHandle
        .apply(this.ptr.getProxy(), arguments);
  };

  DCOMPTextureProxy.prototype.setDCOMPSurfaceHandle = function(token) {
    var params_ = new DCOMPTexture_SetDCOMPSurfaceHandle_Params();
    params_.token = token;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDCOMPTexture_SetDCOMPSurfaceHandle_Name,
          codec.align(DCOMPTexture_SetDCOMPSurfaceHandle_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(DCOMPTexture_SetDCOMPSurfaceHandle_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function DCOMPTextureStub(delegate) {
    this.delegate_ = delegate;
  }
  DCOMPTextureStub.prototype.startListening = function(client) {
    return this.delegate_ && this.delegate_.startListening && this.delegate_.startListening(client);
  }
  DCOMPTextureStub.prototype.setTextureSize = function(size) {
    return this.delegate_ && this.delegate_.setTextureSize && this.delegate_.setTextureSize(size);
  }
  DCOMPTextureStub.prototype.setDCOMPSurfaceHandle = function(token) {
    return this.delegate_ && this.delegate_.setDCOMPSurfaceHandle && this.delegate_.setDCOMPSurfaceHandle(token);
  }

  DCOMPTextureStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDCOMPTexture_StartListening_Name:
      var params = reader.decodeStruct(DCOMPTexture_StartListening_Params);
      this.startListening(params.client);
      return true;
    case kDCOMPTexture_SetTextureSize_Name:
      var params = reader.decodeStruct(DCOMPTexture_SetTextureSize_Params);
      this.setTextureSize(params.size);
      return true;
    default:
      return false;
    }
  };

  DCOMPTextureStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDCOMPTexture_SetDCOMPSurfaceHandle_Name:
      var params = reader.decodeStruct(DCOMPTexture_SetDCOMPSurfaceHandle_Params);
      this.setDCOMPSurfaceHandle(params.token).then(function(response) {
        var responseParams =
            new DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kDCOMPTexture_SetDCOMPSurfaceHandle_Name,
            codec.align(DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateDCOMPTextureRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDCOMPTexture_StartListening_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DCOMPTexture_StartListening_Params;
      break;
      case kDCOMPTexture_SetTextureSize_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DCOMPTexture_SetTextureSize_Params;
      break;
      case kDCOMPTexture_SetDCOMPSurfaceHandle_Name:
        if (message.expectsResponse())
          paramsClass = DCOMPTexture_SetDCOMPSurfaceHandle_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDCOMPTextureResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDCOMPTexture_SetDCOMPSurfaceHandle_Name:
        if (message.isResponse())
          paramsClass = DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var DCOMPTexture = {
    name: 'gpu.mojom.DCOMPTexture',
    kVersion: 0,
    ptrClass: DCOMPTexturePtr,
    proxyClass: DCOMPTextureProxy,
    stubClass: DCOMPTextureStub,
    validateRequest: validateDCOMPTextureRequest,
    validateResponse: validateDCOMPTextureResponse,
  };
  DCOMPTextureStub.prototype.validator = validateDCOMPTextureRequest;
  DCOMPTextureProxy.prototype.validator = validateDCOMPTextureResponse;
  var kDCOMPTextureClient_OnSharedImageMailboxBound_Name = 0;
  var kDCOMPTextureClient_OnOutputRectChange_Name = 1;

  function DCOMPTextureClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DCOMPTextureClient,
                                                   handleOrPtrInfo);
  }

  function DCOMPTextureClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DCOMPTextureClient, associatedInterfacePtrInfo);
  }

  DCOMPTextureClientAssociatedPtr.prototype =
      Object.create(DCOMPTextureClientPtr.prototype);
  DCOMPTextureClientAssociatedPtr.prototype.constructor =
      DCOMPTextureClientAssociatedPtr;

  function DCOMPTextureClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  DCOMPTextureClientPtr.prototype.onSharedImageMailboxBound = function() {
    return DCOMPTextureClientProxy.prototype.onSharedImageMailboxBound
        .apply(this.ptr.getProxy(), arguments);
  };

  DCOMPTextureClientProxy.prototype.onSharedImageMailboxBound = function(mailbox) {
    var params_ = new DCOMPTextureClient_OnSharedImageMailboxBound_Params();
    params_.mailbox = mailbox;
    var builder = new codec.MessageV0Builder(
        kDCOMPTextureClient_OnSharedImageMailboxBound_Name,
        codec.align(DCOMPTextureClient_OnSharedImageMailboxBound_Params.encodedSize));
    builder.encodeStruct(DCOMPTextureClient_OnSharedImageMailboxBound_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DCOMPTextureClientPtr.prototype.onOutputRectChange = function() {
    return DCOMPTextureClientProxy.prototype.onOutputRectChange
        .apply(this.ptr.getProxy(), arguments);
  };

  DCOMPTextureClientProxy.prototype.onOutputRectChange = function(outputRect) {
    var params_ = new DCOMPTextureClient_OnOutputRectChange_Params();
    params_.outputRect = outputRect;
    var builder = new codec.MessageV0Builder(
        kDCOMPTextureClient_OnOutputRectChange_Name,
        codec.align(DCOMPTextureClient_OnOutputRectChange_Params.encodedSize));
    builder.encodeStruct(DCOMPTextureClient_OnOutputRectChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DCOMPTextureClientStub(delegate) {
    this.delegate_ = delegate;
  }
  DCOMPTextureClientStub.prototype.onSharedImageMailboxBound = function(mailbox) {
    return this.delegate_ && this.delegate_.onSharedImageMailboxBound && this.delegate_.onSharedImageMailboxBound(mailbox);
  }
  DCOMPTextureClientStub.prototype.onOutputRectChange = function(outputRect) {
    return this.delegate_ && this.delegate_.onOutputRectChange && this.delegate_.onOutputRectChange(outputRect);
  }

  DCOMPTextureClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDCOMPTextureClient_OnSharedImageMailboxBound_Name:
      var params = reader.decodeStruct(DCOMPTextureClient_OnSharedImageMailboxBound_Params);
      this.onSharedImageMailboxBound(params.mailbox);
      return true;
    case kDCOMPTextureClient_OnOutputRectChange_Name:
      var params = reader.decodeStruct(DCOMPTextureClient_OnOutputRectChange_Params);
      this.onOutputRectChange(params.outputRect);
      return true;
    default:
      return false;
    }
  };

  DCOMPTextureClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDCOMPTextureClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDCOMPTextureClient_OnSharedImageMailboxBound_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DCOMPTextureClient_OnSharedImageMailboxBound_Params;
      break;
      case kDCOMPTextureClient_OnOutputRectChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DCOMPTextureClient_OnOutputRectChange_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDCOMPTextureClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DCOMPTextureClient = {
    name: 'gpu.mojom.DCOMPTextureClient',
    kVersion: 0,
    ptrClass: DCOMPTextureClientPtr,
    proxyClass: DCOMPTextureClientProxy,
    stubClass: DCOMPTextureClientStub,
    validateRequest: validateDCOMPTextureClientRequest,
    validateResponse: null,
  };
  DCOMPTextureClientStub.prototype.validator = validateDCOMPTextureClientRequest;
  DCOMPTextureClientProxy.prototype.validator = null;
  exports.SchedulingPriority = SchedulingPriority;
  exports.RasterCreationAttribs = RasterCreationAttribs;
  exports.GLESCreationAttribs = GLESCreationAttribs;
  exports.WebGPUCreationAttribs = WebGPUCreationAttribs;
  exports.CreateCommandBufferParams = CreateCommandBufferParams;
  exports.CommandBufferState = CommandBufferState;
  exports.SwapBuffersCompleteParams = SwapBuffersCompleteParams;
  exports.DeferredRequest = DeferredRequest;
  exports.DeferredCommandBufferRequest = DeferredCommandBufferRequest;
  exports.AsyncFlushParams = AsyncFlushParams;
  exports.SharedImageInfo = SharedImageInfo;
  exports.CreateSharedImageParams = CreateSharedImageParams;
  exports.CreateSharedImageWithDataParams = CreateSharedImageWithDataParams;
  exports.CreateSharedImageWithBufferParams = CreateSharedImageWithBufferParams;
  exports.UpdateSharedImageParams = UpdateSharedImageParams;
  exports.AddReferenceToSharedImageParams = AddReferenceToSharedImageParams;
  exports.CopyToGpuMemoryBufferParams = CopyToGpuMemoryBufferParams;
  exports.RegisterDxgiFenceParams = RegisterDxgiFenceParams;
  exports.UpdateDxgiFenceParams = UpdateDxgiFenceParams;
  exports.UnregisterDxgiFenceParams = UnregisterDxgiFenceParams;
  exports.CreateSharedImagePoolParams = CreateSharedImagePoolParams;
  exports.DestroySharedImagePoolParams = DestroySharedImagePoolParams;
  exports.ContextCreationAttribs = ContextCreationAttribs;
  exports.DeferredRequestParams = DeferredRequestParams;
  exports.DeferredCommandBufferRequestParams = DeferredCommandBufferRequestParams;
  exports.DeferredSharedImageRequest = DeferredSharedImageRequest;
  exports.GpuChannel = GpuChannel;
  exports.GpuChannelPtr = GpuChannelPtr;
  exports.GpuChannelAssociatedPtr = GpuChannelAssociatedPtr;
  exports.CommandBuffer = CommandBuffer;
  exports.CommandBufferPtr = CommandBufferPtr;
  exports.CommandBufferAssociatedPtr = CommandBufferAssociatedPtr;
  exports.CommandBufferClient = CommandBufferClient;
  exports.CommandBufferClientPtr = CommandBufferClientPtr;
  exports.CommandBufferClientAssociatedPtr = CommandBufferClientAssociatedPtr;
  exports.DCOMPTexture = DCOMPTexture;
  exports.DCOMPTexturePtr = DCOMPTexturePtr;
  exports.DCOMPTextureAssociatedPtr = DCOMPTextureAssociatedPtr;
  exports.DCOMPTextureClient = DCOMPTextureClient;
  exports.DCOMPTextureClientPtr = DCOMPTextureClientPtr;
  exports.DCOMPTextureClientAssociatedPtr = DCOMPTextureClientAssociatedPtr;
})();
